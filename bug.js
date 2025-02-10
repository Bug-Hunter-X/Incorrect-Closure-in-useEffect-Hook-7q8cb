```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    // This effect runs every time count changes
    console.log('Count changed:', count);
    // Incorrectly using previous count value within the effect
    if(previousCount > 5){
        console.log("Previous count was greater than 5");
    }
  }, [count]);

  let previousCount = 0;

  const increment = () => {
    previousCount = count; //Store current count value before updating
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```