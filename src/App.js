import ExpenseItem from "./components/ExpenseItem";

function App() {
  const para = document.createElement('p');
  para.textContent = 'This is alosu visible';
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
