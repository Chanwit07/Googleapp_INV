/**
 * โค้ดฝั่ง Backend สำหรับ Google Apps Script
 * ทำหน้าที่เชื่อมต่อกับ Google Sheets, ดึงข้อมูล, และกรองข้อมูลตามเงื่อนไข
 */

const SPREADSHEET_ID = '12yX4gir_ygcnr7wm1YzGSIUVrYo3JhQyv1BhLu86HZg';
const SHEET_NAME = 'Sheet1'; // หาก Sheet ของคุณชื่ออื่น กรุณาเปลี่ยนชื่อตรงนี้

// ฟังก์ชันหลักสำหรับเปิด Web App
function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Procurement Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * ฟังก์ชันสำหรับดึงข้อมูลทั้งหมดจาก Sheet และแปลงเป็น Array of Objects
 * เพื่อให้ง่ายต่อการนำไปใช้งานต่อ
 */
function getSheetData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0]; // ดึง Sheet แรกถ้าหาชื่อไม่เจอ
  const data = sheet.getDataRange().getDisplayValues();
  
  if (data.length <= 1) return []; // ถ้าไม่มีข้อมูล (มีแค่ Header)

  const headers = data[0];
  const rows = data.slice(1);
  
  // แปลง Array 2 มิติเป็น Array ของ Object
  const jsonData = rows.map(row => {
    let obj = {};
    headers.forEach((header, index) => {
      // ตัดช่องว่างซ้ายขวาและทำให้อยู่ในรูปตัวแปรที่ใช้งานง่าย
      let key = header.toString().trim();
      obj[key] = row[index] ? row[index].toString().trim() : "";
    });
    return obj;
  });
  
  return jsonData;
}

/**
 * ฟังก์ชันดึงตัวเลือกสำหรับ Dropdown (ปีงบประมาณ และ สถานะปัจจุบัน)
 * ทำงานเมื่อเปิดหน้าเว็บครั้งแรก
 */
function getDropdownData() {
  try {
    const data = getSheetData();
    let fiscalYears = new Set();
    let currentStatuses = new Set();
    
    data.forEach(row => {
      if (row['fiscal_year'] && row['fiscal_year'] !== "nan" && row['fiscal_year'] !== "None") {
        fiscalYears.add(row['fiscal_year']);
      }
      if (row['current_status'] && row['current_status'] !== "nan" && row['current_status'] !== "None") {
        currentStatuses.add(row['current_status']);
      }
    });
    
    return {
      status: 'success',
      fiscalYears: Array.from(fiscalYears).sort((a, b) => b - a), // เรียงปีจากมากไปน้อย
      currentStatuses: Array.from(currentStatuses).sort()
    };
  } catch (error) {
    return { status: 'error', message: error.toString() };
  }
}

/**
 * ฟังก์ชันสำหรับค้นหาและกรองข้อมูลตามฟอร์ม
 * @param {Object} filters - เงื่อนไขที่ส่งมาจาก Frontend
 */
function searchProcurementData(filters) {
  try {
    const data = getSheetData();
    
    const filteredData = data.filter(row => {
      let isMatch = true;
      
      // 1. กรองตามเลขที่คำขอ (Requisition Number)
      if (filters.reqNumber && row['requisition_number']) {
        if (!row['requisition_number'].toLowerCase().includes(filters.reqNumber.toLowerCase())) {
          isMatch = false;
        }
      }
      
      // 2. กรองตามรหัสสินค้า (Item Code)
      if (isMatch && filters.itemCode && row['item_code']) {
        if (!row['item_code'].toLowerCase().includes(filters.itemCode.toLowerCase())) {
          isMatch = false;
        }
      }
      
      // 3. กรองตามเลขที่ใบสั่งงาน (PO Number)
      if (isMatch && filters.poNumber && row['po_number']) {
        if (!row['po_number'].toLowerCase().includes(filters.poNumber.toLowerCase())) {
          isMatch = false;
        }
      }
      
      // 4. กรองตามรายละเอียดสินค้า (Item Description)
      if (isMatch && filters.itemDesc && row['item_description']) {
        if (!row['item_description'].toLowerCase().includes(filters.itemDesc.toLowerCase())) {
          isMatch = false;
        }
      }
      
      // 5. กรองตามปีงบประมาณ (Fiscal Year)
      if (isMatch && filters.fiscalYear && filters.fiscalYear !== "") {
        if (row['fiscal_year'] !== filters.fiscalYear) {
          isMatch = false;
        }
      }
      
      // 6. กรองตามผู้สร้าง PR (PR Created By)
      if (isMatch && filters.prCreatedBy && row['pr_created_by']) {
        if (!row['pr_created_by'].toLowerCase().includes(filters.prCreatedBy.toLowerCase())) {
          isMatch = false;
        }
      }
      
      // 7. กรองตามสถานะปัจจุบัน (Current Status)
      if (isMatch && filters.currentStatus && filters.currentStatus !== "") {
        if (row['current_status'] !== filters.currentStatus) {
          isMatch = false;
        }
      }
      
      return isMatch;
    });
    
    return {
      status: 'success',
      data: filteredData
    };
    
  } catch (error) {
    return {
      status: 'error',
      message: error.toString()
    };
  }
}
