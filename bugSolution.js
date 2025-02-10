```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      console.log("Previous count was:", prevCount);
      if(prevCount > 5){
        console.log("Previous count was greater than 5");
      }
      return newCount; 
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```