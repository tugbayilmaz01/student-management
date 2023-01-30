const Table = (lectures) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th> Lecture Id</th>
          <th>Lecture Name</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(lectures).map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.lectureID}</td>
              <td>{item.lecturename}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
