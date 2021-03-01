import Layout from "components/Layout/Layout";
import Intro from "components/Intro/Intro";
import Profile from "components/Profile/Profile";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Profile />
    </Layout>
  );
}
