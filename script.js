// document.addEventListener("DOMContentLoaded", () => {
//     const tbody = document.querySelector(".invoice-table tbody");

//     const MAX_ROWS = 8; // Maximum number of rows to display

//     // Function to update the table body
//     function adjustTableRows() {
//         const rows = tbody.querySelectorAll("tr");
//         const rowCount = rows.length;

//         if (rowCount < MAX_ROWS) {
//             // Add empty rows to fill the remaining space
//             for (let i = rowCount; i < MAX_ROWS; i++) {
//                 const emptyRow = document.createElement("tr");
//                 for (let j = 0; j < 10; j++) {
//                     const emptyCell = document.createElement("td");
//                     emptyCell.innerHTML = "&nbsp;"; // Add non-breaking space
//                     emptyRow.appendChild(emptyCell);
//                 }
//                 tbody.appendChild(emptyRow);
//             }
//         } else if (rowCount > MAX_ROWS) {
//             // Hide extra rows
//             rows.forEach((row, index) => {
//                 row.style.display = index < MAX_ROWS ? "table-row" : "none";
//             });
//         }
//     }

//     // Initial adjustment
//     adjustTableRows();
// });


document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector(".invoice-table tbody");
    const MAX_BODY_HEIGHT = 300; // Maximum height of the tbody in pixels
    const MAX_ROWS = 10; // Maximum number of rows by default
    const ROW_HEIGHT = 35; // Approximate default row height in pixels

    // Function to update the table body
    function adjustTableRows() {
        const rows = tbody.querySelectorAll("tr");
        let totalHeight = 0;
        let visibleRows = 0;

        // Calculate how many rows can fit within the max height
        rows.forEach((row) => {
            row.style.display = "table-row"; // Reset visibility for all rows
            const rowHeight = row.getBoundingClientRect().height || ROW_HEIGHT;
            totalHeight += rowHeight; 

            if (totalHeight <= MAX_BODY_HEIGHT) {
                visibleRows++;
            } else {
                row.style.display = "none"; // Hide rows that don't fit
            }
        });

        // Add empty rows if there are fewer than max rows and room is available
        if (visibleRows < MAX_ROWS && totalHeight < MAX_BODY_HEIGHT) {
            for (let i = visibleRows; i < MAX_ROWS; i++) {
                const emptyRow = document.createElement("tr");
                for (let j = 0; j < 10; j++) { // Assuming 10 columns
                    const emptyCell = document.createElement("td");
                    emptyCell.innerHTML = "&nbsp;"; // Add non-breaking space
                    emptyRow.appendChild(emptyCell);
                }
                tbody.appendChild(emptyRow);
                const emptyRowHeight = emptyRow.getBoundingClientRect().height || ROW_HEIGHT;
                totalHeight += emptyRowHeight;

                if (totalHeight > MAX_BODY_HEIGHT) {
                    tbody.removeChild(emptyRow); // Remove extra empty row if it exceeds the height
                    break;
                }
            }
        }
    }

    // Initial adjustment
    adjustTableRows();

    // Optional: Re-adjust rows if content dynamically changes
    window.addEventListener("resize", adjustTableRows); // Adjust on window resize, if needed
});


// document.addEventListener("DOMContentLoaded", () => {
//     const tbody = document.querySelector(".invoice-table tbody");
//     const MAX_BODY_HEIGHT = 350; // Fixed tbody height
//     const DEFAULT_ROW_HEIGHT = 35; // Approximate row height

//     function adjustTableRows() {
//         const rows = Array.from(tbody.querySelectorAll("tr"));
//         let currentHeight = 0;

//         rows.forEach((row, index) => {
//             const rowHeight = row.getBoundingClientRect().height || DEFAULT_ROW_HEIGHT;
//             currentHeight += rowHeight;

//             // Show rows that fit, hide the rest
//             row.style.display = currentHeight <= MAX_BODY_HEIGHT ? "table-row" : "none";
//         });

//         // Add empty rows if space remains
//         while (currentHeight < MAX_BODY_HEIGHT) {
//             const emptyRow = document.createElement("tr");
//             for (let i = 0; i < 10; i++) {
//                 const emptyCell = document.createElement("td");
//                 emptyCell.innerHTML = "&nbsp;";
//                 emptyRow.appendChild(emptyCell);
//             }
//             tbody.appendChild(emptyRow);
//             currentHeight += DEFAULT_ROW_HEIGHT;
//         }
//     }

//     adjustTableRows();
// });


