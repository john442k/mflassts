$(document).ready(function() {
    "use strict";
    // $("#basic-datatable").DataTable({
    //     keys: !0,
    //     language: {
    //         paginate: {
    //             previous: "<i class='mdi mdi-chevron-left'>",
    //             next: "<i class='mdi mdi-chevron-right'>"
    //         }
    //     },
    //     drawCallback: function() {
    //         $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //     }
    // });
    var a = $("#datatable-buttons").DataTable({
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
    $("#selection-datatable").DataTable({
        select: {
            style: "multi"
        },
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
    a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"),
    $("#alternative-page-datatable").DataTable({
        pagingType: "full_numbers",
  
        order: [],
        language: {
            "info": "Showing _START_ to _END_ of _TOTAL_ Users",
            "lengthMenu": "Show _MENU_ Users",
            "infoEmpty": "Showing 0 to 0 of 0 Users",
            "infoFiltered":   "(filtered from _MAX_ total Users)",
            "zeroRecords":    "No matching Users found",
            "loadingRecords": "Loading Users...",
        },

        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
    $("#scroll-vertical-datatable").DataTable({
        scrollY: "350px",
        scrollCollapse: !0,
        paging: !1,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
    $("#scroll-horizontal-datatable").DataTable({
        scrollX: !0,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
    $("#complex-header-datatable").DataTable({
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        columnDefs: [{
            visible: !1,
            targets: -1
        }]
    }),
    $("#row-callback-datatable").DataTable({
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        createdRow: function(a, e, t) {
            15e4 < +e[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
        }
    }),
    $("#state-saving-datatable").DataTable({
        stateSave: !0,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
    $("#fixed-columns-datatable").DataTable({
        scrollY: 300,
        scrollX: !0,
        scrollCollapse: !0,
        paging: !1,
        fixedColumns: !0
    }),
    $(".dataTables_length select").addClass("form-select form-select-sm"),
    $(".dataTables_length label").addClass("form-label")
});
// $(document).ready(function() {
//     var a = $("#fixed-header-datatable").DataTable({
//         responsive: !0,
//         language: {
//             paginate: {
//                 previous: "<i class='mdi mdi-chevron-left'>",
//                 next: "<i class='mdi mdi-chevron-right'>"
//             }
//         },
//         drawCallback: function() {
//             $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
//         }
//     });
//     new $.fn.dataTable.FixedHeader(a)
// });
