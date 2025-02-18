import { useState } from "react";

export const AddComponent = () => {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const addValue = () => {
    if (inputValue.trim() === "") return;
    if (editId) {
      setValue(
        value.map((e) => (editId === e.id ? { ...e, value: inputValue } : e))
      );
      setEditId(null);
      setIsEditing(false);
    } else {
      setValue([...value, { id: Date.now(), value: inputValue }]);
    }
    setInputValue("");
  };
  const deleteValue = (id) => {
    setValue(value.filter((e) => e.id != id));
  };
  const startEdit = (id, currentValue) => {
    console.log("check id ====", id);
    console.log("check value ====", value);

    setInputValue(currentValue); // Hiển thị giá trị vào ô input
    setEditId(id);
    setIsEditing(true); // Đánh dấu đang sửa todo này
  };
  return (
    <>
      <h1>Todo list</h1>
      <input
        className="input-todo"
        type="text"
        placeholder="add value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addValue}>{editId ? "save" : " Add value"}</button>

      <ul>
        {value.map((item) => (
          <li key={item.id}>
            {item.value}
            {!isEditing && (
              <button
                className="button-delete"
                onClick={() => deleteValue(item.id)}
              >
                Delete
              </button>
            )}
            <button
              className="button-edit"
              onClick={() => startEdit(item.id, item.value)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
