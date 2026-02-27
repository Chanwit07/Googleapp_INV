<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procurement Dashboard</title>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- DataTables CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Prompt', sans-serif;
            background-color: #f4f6f9;
        }
        .navbar-brand {
            font-weight: 600;
        }
        .card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }
        .card-header {
            background-color: #fff;
            border-bottom: 1px solid #f0f0f0;
            font-weight: 600;
            border-radius: 10px 10px 0 0 !important;
        }
        
        /* Stepper CSS */
        .stepper-wrapper {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            position: relative;
        }
        .stepper-item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
            z-index: 1;
        }
        .stepper-item::before {
            position: absolute;
            content: "";
            border-bottom: 2px solid #ccc;
            width: 100%;
            top: 15px;
            left: -50%;
            z-index: -1;
        }
        .stepper-item::after {
            position: absolute;
            content: "";
            border-bottom: 2px solid #ccc;
            width: 100%;
            top: 15px;
            left: 50%;
            z-index: -1;
        }
        .stepper-item .step-counter {
            position: relative;
            z-index: 5;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #ccc;
            color: white;
            font-size: 12px;
            margin-bottom: 6px;
        }
        .stepper-item.completed .step-counter {
            background-color: #198754; /* Success Green */
        }
        .stepper-item.completed::before,
        .stepper-item.completed::after {
            border-bottom-color: #198754;
        }
        .stepper-item:first-child::before {
            content: none;
        }
        .stepper-item:last-child::after {
            content: none;
        }
        .step-name {
            font-size: 10px;
            text-align: center;
            color: #6c757d;
        }
        .stepper-item.completed .step-name {
            color: #198754;
            font-weight: 500;
        }
        
        .status-badge {
            font-size: 0.8rem;
            margin-top: 5px;
            text-align: center;
            display: block;
        }

        /* Loading Overlay */
        #loadingOverlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(255,255,255,0.8);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            display: none;
        }
        
        .table-responsive {
            overflow-x: auto;
        }
        table.dataTable td {
            vertical-align: middle;
        }
        
        /* Modal Info */
        .info-label {
            font-weight: 600;
            color: #555;
            font-size: 0.9rem;
        }
        .info-value {
            font-size: 1rem;
            color: #000;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>

    <!-- Loading Overlay -->
    <div id="loadingOverlay">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><i class="fas fa-chart-line me-2"></i>Procurement Dashboard</a>
        </div>
    </nav>

    <div class="container-fluid px-4">
        <!-- Filter Card -->
        <div class="card">
            <div class="card-header text-primary">
                <i class="fas fa-filter me-2"></i>ค้นหาและกรองข้อมูล
            </div>
            <div class="card-body">
                <form id="searchForm" onsubmit="handleSearch(event)">
                    <div class="row g-3">
                        <div class="col-md-4 col-lg-2">
                            <label class="form-label">เลขที่คำขอ (PR No.)</label>
                            <input type="text" class="form-control" id="reqNumber" placeholder="ระบุเลข PR">
                        </div>
                        <div class="col-md-4 col-lg-2">
                            <label class="form-label">รหัสสินค้า (Item Code)</label>
                            <input type="text" class="form-control" id="itemCode" placeholder="ระบุรหัสสินค้า">
                        </div>
                        <div class="col-md-4 col-lg-2">
                            <label class="form-label">เลขที่ใบสั่งงาน (PO No.)</label>
                            <input type="text" class="form-control" id="poNumber" placeholder="ระบุเลข PO">
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <label class="form-label">รายละเอียด (Item Desc)</label>
                            <input type="text" class="form-control" id="itemDesc" placeholder="คำค้นหาสินค้า">
                        </div>
                        <div class="col-md-4 col-lg-3">
                            <label class="form-label">ผู้สร้าง PR</label>
                            <input type="text" class="form-control" id="prCreatedBy" placeholder="ระบุผู้สร้าง">
                        </div>
                        <div class="col-md-6 col-lg-2">
                            <label class="form-label">ปีงบประมาณ</label>
                            <select class="form-select" id="fiscalYear">
                                <option value="">-- ทั้งหมด --</option>
                                <!-- Populate by JS -->
                            </select>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <label class="form-label">สถานะปัจจุบัน</label>
                            <select class="form-select" id="currentStatus">
                                <option value="">-- ทั้งหมด --</option>
                                <!-- Populate by JS -->
                            </select>
                        </div>
                        <div class="col-12 d-flex justify-content-end mt-4">
                            <button type="button" class="btn btn-secondary me-2" onclick="clearForm()"><i class="fas fa-undo me-1"></i>ล้างค่า</button>
                            <button type="submit" class="btn btn-primary"><i class="fas fa-search me-1"></i>ค้นหาข้อมูล</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Data Table Card -->
        <div class="card">
            <div class="card-header text-primary">
                <i class="fas fa-table me-2"></i>ผลลัพธ์การค้นหา
            </div>
            <div class="card-body table-responsive">
                <table id="procurementTable" class="table table-striped table-hover w-100">
                    <thead class="table-light">
                        <tr>
                            <th>เลขที่คำขอ (PR)</th>
                            <th>รหัสสินค้า</th>
                            <th>รายการสินค้า</th>
                            <th>ปีงบฯ</th>
                            <th>ผู้สร้าง PR</th>
                            <th style="min-width: 250px;">สถานะกระบวนการ (Progress)</th>
                            <th class="text-center">จัดการ</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        <!-- Data will be populated here -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal Detail -->
    <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="detailModalLabel"><i class="fas fa-info-circle me-2"></i>รายละเอียดรายการจัดซื้อ</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row" id="modalContent">
                        <!-- Content populated by JS -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ปิดหน้าต่าง</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <!-- jQuery (Required for DataTables) -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- DataTables JS -->
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>

    <script>
        let dataTable;
        let globalData = []; // เก็บข้อมูลที่ดึงมาเพื่อใช้อ้างอิงใน Modal

        $(document).ready(function() {
            // Initialize DataTable
            dataTable = $('#procurementTable').DataTable({
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/th.json"
                },
                "order": [], // ปิดการเรียงลำดับเริ่มต้น
                "pageLength": 10
            });

            // Load Initial Options for Dropdowns
            showLoading(true);
            google.script.run
                .withSuccessHandler(populateDropdowns)
                .withFailureHandler(handleError)
                .getDropdownData();
        });

        function populateDropdowns(response) {
            if(response.status === 'success') {
                const yearSelect = $('#fiscalYear');
                response.fiscalYears.forEach(year => {
                    yearSelect.append(`<option value="${year}">${year}</option>`);
                });

                const statusSelect = $('#currentStatus');
                response.currentStatuses.forEach(status => {
                    statusSelect.append(`<option value="${status}">${status}</option>`);
                });
            } else {
                alert("เกิดข้อผิดพลาดในการโหลดข้อมูลตัวกรอง: " + response.message);
            }
            showLoading(false);
            
            // โหลดข้อมูลทั้งหมดในครั้งแรก (ไม่มีฟิลเตอร์)
            fetchData({});
        }

        function handleSearch(event) {
            event.preventDefault();
            const filters = {
                reqNumber: $('#reqNumber').val().trim(),
                itemCode: $('#itemCode').val().trim(),
                poNumber: $('#poNumber').val().trim(),
                itemDesc: $('#itemDesc').val().trim(),
                prCreatedBy: $('#prCreatedBy').val().trim(),
                fiscalYear: $('#fiscalYear').val(),
                currentStatus: $('#currentStatus').val()
            };
            fetchData(filters);
        }

        function fetchData(filters) {
            showLoading(true);
            google.script.run
                .withSuccessHandler(renderTable)
                .withFailureHandler(handleError)
                .searchProcurementData(filters);
        }

        function renderTable(response) {
            if(response.status === 'success') {
                globalData = response.data; // เก็บไว้ใช้ตอนคลิกดูรายละเอียด
                
                dataTable.clear(); // ล้างข้อมูลเก่า
                
                response.data.forEach((row, index) => {
                    // สร้าง HTML สำหรับ 3-Step Progress
                    const stepperHtml = generateStepper(row);
                    
                    // จัดการค่าที่ไม่มีให้ดูสะอาด
                    const reqNo = cleanText(row['requisition_number']);
                    const iCode = cleanText(row['item_code']);
                    const desc = cleanText(row['item_description']);
                    const year = cleanText(row['fiscal_year']);
                    const creator = cleanText(row['pr_created_by']);

                    // สร้างปุ่มดูรายละเอียด
                    const actionBtn = `<button class="btn btn-sm btn-info text-white" onclick="viewDetails(${index})">
                                        <i class="fas fa-eye"></i> ดูรายละเอียด
                                      </button>`;

                    dataTable.row.add([
                        reqNo,
                        iCode,
                        desc.length > 50 ? desc.substring(0, 50) + '...' : desc, // ตัดคำถ้ายาวเกินไป
                        year,
                        creator,
                        stepperHtml,
                        actionBtn
                    ]);
                });
                
                dataTable.draw(); // วาดตารางใหม่
            } else {
                alert("เกิดข้อผิดพลาด: " + response.message);
            }
            showLoading(false);
        }

        // ฟังก์ชันสร้าง 3-Step Stepper
        function generateStepper(row) {
            const prStatus = cleanText(row['pr_status']);
            const poStatus = cleanText(row['po_status']);
            const txType = cleanText(row['transaction_type']);
            const currentStatusText = cleanText(row['current_status']);

            // ตรวจสอบเงื่อนไขตามที่ระบุ
            const isStep1 = prStatus.includes('PR Approved');
            const isStep2 = isStep1 && poStatus.includes('PO Approved'); // ต้องผ่าน step 1 ก่อน
            const isStep3 = isStep2 && txType.includes('DELIVER');       // ต้องผ่าน step 2 ก่อน

            return `
                <div class="stepper-wrapper">
                    <div class="stepper-item ${isStep1 ? 'completed' : ''}">
                        <div class="step-counter"><i class="fas fa-file-signature"></i></div>
                        <div class="step-name">สร้างคำขอซื้อ</div>
                    </div>
                    <div class="stepper-item ${isStep2 ? 'completed' : ''}">
                        <div class="step-counter"><i class="fas fa-file-invoice-dollar"></i></div>
                        <div class="step-name">สร้างใบสั่งงาน</div>
                    </div>
                    <div class="stepper-item ${isStep3 ? 'completed' : ''}">
                        <div class="step-counter"><i class="fas fa-box-open"></i></div>
                        <div class="step-name">รับของเข้าคลัง</div>
                    </div>
                </div>
                <span class="status-badge badge bg-secondary w-100">${currentStatusText || 'ไม่ระบุสถานะ'}</span>
            `;
        }

        // ฟังก์ชันแสดงข้อมูลใน Modal
        function viewDetails(index) {
            const row = globalData[index];
            if(!row) return;

            let html = '';
            
            // ฟังก์ชันช่วยสร้าง Grid ภายใน Modal
            const makeCol = (label, key) => {
                let val = cleanText(row[key]);
                return `
                    <div class="col-md-6 col-lg-4 mb-3">
                        <div class="info-label">${label}</div>
                        <div class="info-value">${val || '-'}</div>
                    </div>
                `;
            };

            // ข้อมูล PR
            html += `<h6 class="text-primary border-bottom pb-2 mb-3"><i class="fas fa-file-alt me-2"></i>ข้อมูลคำขอซื้อ (PR)</h6>`;
            html += makeCol('เลขที่คำขอ', 'requisition_number');
            html += makeCol('วันที่คำขอ', 'requisition_date');
            html += makeCol('ผู้สร้าง PR', 'pr_created_by');
            html += makeCol('หน่วยงานที่ขอ', 'requesting_unit');
            html += makeCol('สถานะ PR', 'pr_status');
            html += makeCol('ปีงบประมาณ', 'fiscal_year');
            
            // ข้อมูลสินค้า
            html += `<h6 class="text-primary border-bottom pb-2 mb-3 mt-3"><i class="fas fa-box me-2"></i>ข้อมูลสินค้าและราคา</h6>`;
            html += `<div class="col-12 mb-3"><div class="info-label">รายละเอียดสินค้า</div><div class="info-value">${cleanText(row['item_description']) || '-'}</div></div>`;
            html += makeCol('รหัสสินค้า', 'item_code');
            html += makeCol('จำนวนสั่งซื้อ', 'quantity_ordered');
            html += makeCol('หน่วยนับ', 'unit_meas_lookup_code');
            html += makeCol('ราคาต่อหน่วย', 'unit_price');
            html += makeCol('ราคารวม', 'total_price');
            
            // ข้อมูล PO และการรับของ
            html += `<h6 class="text-primary border-bottom pb-2 mb-3 mt-3"><i class="fas fa-file-contract me-2"></i>ข้อมูลสั่งซื้อและรับของ</h6>`;
            html += makeCol('เลขที่ใบสั่งงาน (PO)', 'po_number');
            html += makeCol('วันที่สร้าง PO', 'po_creation_date');
            html += makeCol('สถานะ PO', 'po_status');
            html += makeCol('ผู้ขาย (Vendor)', 'vendor_name');
            html += makeCol('เลขที่ใบรับของ', 'receipt_number');
            html += makeCol('วันที่รับของ', 'receipt_date');
            html += makeCol('คลังสินค้า', 'destination_subinventory');
            html += makeCol('ประเภท Transaction', 'transaction_type');
            html += makeCol('Lead Time (วัน)', 'total_lead_time_days');

            $('#modalContent').html(html);
            
            // แสดง Modal
            const myModal = new bootstrap.Modal(document.getElementById('detailModal'));
            myModal.show();
        }

        // ฟังก์ชันล้างฟอร์ม
        function clearForm() {
            $('#searchForm')[0].reset();
            fetchData({}); // โหลดข้อมูลทั้งหมดใหม่
        }

        // Helper Functions
        function cleanText(text) {
            if (text === undefined || text === null || text === 'nan' || text === 'None') return '';
            return text.toString().trim();
        }

        function showLoading(show) {
            if(show) {
                $('#loadingOverlay').css('display', 'flex');
            } else {
                $('#loadingOverlay').css('display', 'none');
            }
        }

        function handleError(error) {
            showLoading(false);
            alert("เกิดข้อผิดพลาดในการเชื่อมต่อ: " + error);
        }
    </script>
</body>
</html>
