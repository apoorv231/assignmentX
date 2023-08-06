 /* eslint-disable */
import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";


import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ updateData,rows, selectedCurrency, onOrderClick }) => {

  const callupdateData =(data)=>{

    console.log(" calll func ");
    updateData(data)

  }
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr  key={row["&id"]}  onClick={()=>{ 
            console.log("index : ",index);
            updateData(row, index )}}  >
            <ListRowCell styles={{backgroundColor:'grey'}}> {row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[selectedCurrency]}</ListRowCell>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;