import styled from "styled-components";

const BingoTable = styled.table`
    border-collapse: collapse;
    border: 1px solid #a8a8a8;
    margin: 0 auto;
    width: 100%;
    caption-side: top;
    caption {
        font-size: 1.2rem;
        padding: .2rem 0;
        /* font-weight: bold; */
        background-color: #212529;
        color: #ffffff;
    }
    thead {
        tr {
            th {
                background: #f5f5f5;
                border: 1px solid #a8a8a8;
                text-align: center;
            }
        }
    }
    tbody {
        tr {
            td {
                border: 1px solid #a8a8a8;
                text-align: center;
            }
        }
    }
`;

export default BingoTable;