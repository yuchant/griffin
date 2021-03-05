const Page = (props) => {
  return <div>Griffin: {props.static}</div>;
};

export const getStaticProps = () => {
  // <--
  // this can be async// next doesn't care what you do in here..
  // the output gets saved as static on build time
  return {
    props: {
      static: Math.random(),
    },
    revalidate: 5,
  };
};

export default Page;
