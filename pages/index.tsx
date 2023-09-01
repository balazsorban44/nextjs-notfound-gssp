export default function Home() {}

export function getServerSideProps() {
  return { notFound: true };
}
