export default function Message() {
  function handleClick() {
    alert("Hello Ikris welcome!!");
  }
  return (
    <div>
      <button onClick={handleClick}> Click here to get a message</button>
    </div>
  );
}
