$(document).ready(function() {
    "use strict";
    $("#userLogs").DataTable({
        responsive: true,
        pagingType:  "full_numbers",
        order: [],
        dom: '<"top d-flex justify-content-between"<"dt-left-col d-flex align-items-center"l><"dt-right-group d-flex"Bf>>rt<"bottom d-flex justify-content-between"<"dt-info d-flex align-items-center"i><"dt-pagination"p>>',
        buttons: [
            {
                extend: 'collection',
                text: '<span class="mdi mdi-export" style="color:white !important;"> Export</span>',
                autoClose: true,
                buttons: [
                    { text: '<span class="mdi mdi-content-copy" style="color: gray;"> Copy</span>', extend: 'copyHtml5'},
                    { text: '<span class="mdi mdi-file-excel-outline" style="color: green;"></span><span style="color: gray;"> Excel</span>', extend: 'excelHtml5'},
                    { text: '<span class="mdi mdi-file-document-outline" style="color: orange;"></span><span style="color: gray;"> Csv</span>', extend: 'csvHtml5'},
                    { text: '<span class="mdi mdi-file-pdf-box" style="color: red;"></span><span style="color: gray;"> Pdf</span>', extend: 'pdfHtml5'},
                    {
                        text: '<span class="mdi mdi-code-json" style="color: blue;"></span><span style="color: gray;"> Json</span>',
                        className: 'export-btn',
                        action: function (e, dt, button, config) {
                            var data = dt.buttons.exportData();
                            var blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8;" });
                            saveAs(blob, 'MoviesForge Logs.json');
                        }
                    },
                    { text: '<span class="mdi mdi-printer" style="color: purple;"></span><span style="color: gray;"> Print</span>', extend: 'print', className: 'export-btn'}
                ],
                fade: false,
            }
        ],
        language: {
            "info": "Showing _START_ to _END_ of _TOTAL_ Users",
            "lengthMenu": "Show _MENU_ Users",
            "search": "",
            "infoEmpty": "Showing 0 to 0 of 0 Users",
            "infoFiltered":   "(filtered from _MAX_ total Users)",
            "zeroRecords":    "No matching Users found",
            "loadingRecords": "Loading Users...",
            searchPlaceholder: 'Search...',
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    
    
    
    $("#msgLogs").DataTable({
        responsive: true,
        pagingType:  "full_numbers",
        order: [],
        dom: '<"top d-flex justify-content-between"<"dt-left-col d-flex align-items-center"l><"dt-right-group d-flex"Bf>>rt<"bottom d-flex justify-content-between"<"dt-info d-flex align-items-center"i><"dt-pagination"p>>',
        buttons: [
            {
                extend: 'collection',
                text: '<span class="mdi mdi-export" style="color:white !important;"> Export</span>',
                autoClose: true,
                buttons: [
                    { text: '<span class="mdi mdi-content-copy" style="color: gray;"> Copy</span>', extend: 'copyHtml5'},
                    { text: '<span class="mdi mdi-file-excel-outline" style="color: green;"></span><span style="color: gray;"> Excel</span>', extend: 'excelHtml5'},
                    { text: '<span class="mdi mdi-file-document-outline" style="color: orange;"></span><span style="color: gray;"> Csv</span>', extend: 'csvHtml5'},
                    { text: '<span class="mdi mdi-file-pdf-box" style="color: red;"></span><span style="color: gray;"> Pdf</span>', extend: 'pdfHtml5'},
                    {
                        text: '<span class="mdi mdi-code-json" style="color: blue;"></span><span style="color: gray;"> Json</span>',
                        className: 'export-btn',
                        action: function (e, dt, button, config) {
                            var data = dt.buttons.exportData();
                            var blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8;" });
                            saveAs(blob, 'MoviesForge Logs.json');
                        }
                    },
                    { text: '<span class="mdi mdi-printer" style="color: purple;"></span><span style="color: gray;"> Print</span>', extend: 'print', className: 'export-btn'}
                ],
                fade: false,
            }
        ],
        language: {
            "info": "Showing _START_ to _END_ of _TOTAL_ Messages",
            "lengthMenu": "Show _MENU_ Messages",
            "search": "",
            "infoEmpty": "Showing 0 to 0 of 0 Messages",
            "infoFiltered":   "(filtered from _MAX_ total Messages)",
            "zeroRecords":    "No matching Messages found",
            "loadingRecords": "Loading Messages...",
            searchPlaceholder: 'Search...',
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });

    
    $("#msgDetails").DataTable({
        responsive: true,
        pagingType:  "full_numbers",
        order: [],
        dom: '<"top d-flex justify-content-between"<"dt-left-col d-flex align-items-center"l><"dt-right-group d-flex"Bf>>rt<"bottom d-flex justify-content-between"<"dt-info d-flex align-items-center"i><"dt-pagination"p>>',
        buttons: [
            {
                extend: 'collection',
                text: '<span class="mdi mdi-export" style="color:white !important;"> Export</span>',
                autoClose: true,
                buttons: [
                    { text: '<span class="mdi mdi-content-copy" style="color: gray;"> Copy</span>', extend: 'copyHtml5'},
                    { text: '<span class="mdi mdi-file-excel-outline" style="color: green;"></span><span style="color: gray;"> Excel</span>', extend: 'excelHtml5'},
                    { text: '<span class="mdi mdi-file-document-outline" style="color: orange;"></span><span style="color: gray;"> Csv</span>', extend: 'csvHtml5'},
                    { text: '<span class="mdi mdi-file-pdf-box" style="color: red;"></span><span style="color: gray;"> Pdf</span>', extend: 'pdfHtml5'},
                    {
                        text: '<span class="mdi mdi-code-json" style="color: blue;"></span><span style="color: gray;"> Json</span>',
                        className: 'export-btn',
                        action: function (e, dt, button, config) {
                            var data = dt.buttons.exportData();
                            var blob = new Blob([JSON.stringify(data)], { type: "application/json;charset=utf-8;" });
                            saveAs(blob, 'MoviesForge Logs.json');
                        }
                    },
                    { text: '<span class="mdi mdi-printer" style="color: purple;"></span><span style="color: gray;"> Print</span>', extend: 'print', className: 'export-btn'}
                ],
                fade: false,
            }
        ],
        language: {
            "info": "Showing _START_ to _END_ of _TOTAL_ Users",
            "lengthMenu": "Show _MENU_ Users",
            "search": "",
            "infoEmpty": "Showing 0 to 0 of 0 Users",
            "infoFiltered":   "(filtered from _MAX_ total Users)",
            "zeroRecords":    "No matching Users found",
            "loadingRecords": "Loading Users...",
            searchPlaceholder: 'Search...',
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    
});
