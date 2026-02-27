Act as an expert Full-Stack Developer who specializes in Google Apps Script and Web App development. 

I want you to write the complete code to build a "Procurement Dashboard Web App" using Google Sheets as the database.



**1. โครงสร้างข้อมูล (Data Structure):**

ข้อมูลใน Google Sheets จะมีคอลัมน์ดังนี้เรียงตามลำดับ (คอลัมน์ A ถึง AE):

requisition_number, requisition_date, unit_code, requesting_unit, fiscal_year, pr_created_by, pr_status, po_number, po_creation_date, po_status, pr_line, item_code, item_description, unit_meas_lookup_code, unit_price, quantity_ordered, suggested_vendor_name, total_price, total_price_group, trading_type, description_po, seller, vendor_name, destination_organization, destination_subinventory, receipt_number, receipt_date, transaction_type, received_quantity, current_status, total_lead_time_days



**2. ฟีเจอร์การค้นหาและตัวกรอง (Search & Filter):**

บนหน้า Dashboard จะต้องมี Form หรือ Input fields ให้ผู้ใช้สามารถค้นหาและกรองข้อมูลได้จาก 5 คอลัมน์นี้:

- requisition_number (Text Input)

- item_description (Text Input)

- fiscal_year (Dropdown หรือ Text Input)

- pr_created_by (Text Input)

- current_status (Dropdown)

เมื่อผู้ใช้กดปุ่ม "ค้นหา" ให้ดึงข้อมูลที่ตรงกับเงื่อนไขมาแสดงผลในรูปแบบตาราง (Data Table) ด้านล่าง



**3. เงื่อนไขการแสดงผลสถานะแบบ 3 ขั้นตอน (3-Step Progress Tracking):**

ในตารางแสดงผลข้อมูล นอกจากจะแสดงข้อมูลพื้นฐานแล้ว ให้เพิ่มการแสดงผล "สถานะกระบวนการ (Progress)" เป็นรูปแบบ UI Stepper หรือ Progress bar 3 ขั้นตอน โดยตรวจสอบเงื่อนไขดังนี้:

- ขั้นตอนที่ 1: "สร้างคำขอซื้อแล้ว" -> ตรวจสอบจากคอลัมน์ `pr_status` (ถ้ามีคำว่า "PR Approved" ให้ถือว่าผ่านขั้นตอนนี้)

- ขั้นตอนที่ 2: "สร้างใบสั่งงานแล้ว" -> ตรวจสอบจากคอลัมน์ `po_status` (ถ้ามีคำว่า "PO Approved" ให้ถือว่าผ่านขั้นตอนนี้)

- ขั้นตอนที่ 3: "รับของเข้าคลังแล้ว" -> ตรวจสอบจากคอลัมน์ `transaction_type` (ถ้ามีคำว่า "DELIVER" ให้ถือว่าผ่านขั้นตอนนี้)

*หมายเหตุ: คอลัมน์ `current_status` จะเป็นตัวบอกด้วยข้อความว่าตอนนี้งานอยู่ในขั้นตอนไหน ให้แสดงควบคู่กับ Progress 3 ขั้นตอนนี้เพื่อให้ผู้ใช้งานเข้าใจง่ายขึ้น



**4. UI/UX และ Tech Stack:**

- ใช้ Google Apps Script (Code.gs) สำหรับฝั่ง Backend ดึงข้อมูลจาก Google Sheets ส่งเป็น JSON

- ใช้ HTML, CSS, JavaScript (index.html) สำหรับฝั่ง Frontend

- แนะนำให้ใช้ Framework อย่าง Bootstrap 5 หรือ Tailwind CSS ผ่าน CDN เพื่อความสวยงามและ Responsive

- ตารางแสดงผลให้ใช้ไลบรารีอย่าง DataTables (ถ้าเป็นไปได้) เพื่อให้สามารถ Sort และแบ่งหน้า (Pagination) ได้ง่าย

- แสดงข้อมูลในตารางเฉพาะคอลัมน์ที่สำคัญ เช่น requisition_number, item_description, fiscal_year, pr_created_by และคอลัมน์สถานะ (Progress) พร้อมปุ่ม "ดูรายละเอียด" เพื่อกดดูข้อมูลคอลัมน์อื่นๆ ในรูปแบบ Modal



**5. สิ่งที่ต้องการ (Deliverables):**

โปรดเขียนโค้ดที่สามารถนำไปวางใน Google Apps Script Editor ได้ทันที โดยแยกเป็น:

1. `Code.gs`: ฟังก์ชัน doGet() และฟังก์ชันดึง/ค้นหาข้อมูลจาก Google Sheets

2. `index.html`: หน้า UI รวม CSS และ JavaScript ไว้ในไฟล์เดียว (หรือแยกไฟล์ตามแนวทางปฏิบัติที่ดีของ GAS)



กรุณาเขียนโค้ดให้มีประสิทธิภาพ จัดการ Error เบื้องต้น และใส่คอมเมนต์อธิบายโค้ดเป็นภาษาไทย

โดยดึงข้อมูล จาก Googlesheet ID: https://docs.google.com/spreadsheets/d/12yX4gir_ygcnr7wm1YzGSIUVrYo3JhQyv1BhLu86HZg/edit?gid=0#gid=0
