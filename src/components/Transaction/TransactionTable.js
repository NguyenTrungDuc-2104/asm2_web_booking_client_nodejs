import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Cart";
import TransactionTableRow from "./TransactionTableRow";
import styles from "./TransactionTable.module.css";

//--------table transaction---------
const TransactionTable = () => {
  const dataTransactions = useLoaderData();
  return (
    <Card className={styles.container_table}>
      <h1>Your Transactions</h1>
      <table className={styles.cotent_table}>
        <thead className={styles.table_thead}>
          <tr className={styles.table_row}>
            <th>#</th>
            <th>Hotel</th>
            <th>Room</th>
            <th>Date</th>
            <th>Price</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className={styles.table_tbody}>
          {dataTransactions.length > 0 &&
            dataTransactions.map((item, index) => {
              return (
                <TransactionTableRow
                  key={item._id}
                  dataRow={item}
                  stt={index}
                />
              );
            })}
        </tbody>
      </table>
    </Card>
  );
};

export default TransactionTable;
