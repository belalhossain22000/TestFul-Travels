import React from "react";
import Banner from "./Banner.jsx";
import ChefSection from "./ChefSection .jsx";
import FeaturedRecipesSection from "./FeaturedRecipesSection .jsx";
import ChefTips from "./ChefTips .jsx";

const Home = () => {
//   const [chefss, setChefss] = useState();

//   useEffect(() => {
//     fetch("http://localhost:5000/allData")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setChefss(data);
//       });
//   }, []);
  return (
    <div>
      <Banner></Banner>
      <ChefSection></ChefSection>
      <FeaturedRecipesSection></FeaturedRecipesSection>
      <ChefTips></ChefTips>

      <h1>thiis is home page</h1>
    </div>
  );
};

export default Home;
