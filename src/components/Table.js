const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th> Lecture Id</th>
          <th>Lecture Name</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(props.lecture).map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.lectureID}</td>
              <td>{item.lecturename}</td>
              <td>
                {" "}
                <button onClick={props.deleteTableRows} className="lecturebtn">
                  {" "}
                  X
                </button>
              </td>
              <td>
                <button className="lecturebtn">Edit</button>{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
