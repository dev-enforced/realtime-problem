import { useProducts } from "context";
const App = () => {
  const { loading } = useProducts();
  return <>{loading ? <>loading....</> : null}</>;
};

export default App;
