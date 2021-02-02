$(document).ready(function() {
    var table = $('#example').DataTable( {
        // scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        paging:         true,
        fixedColumns:   {
            leftColumns: 2,
            rightColumns: 1
        }
    } );
} );


