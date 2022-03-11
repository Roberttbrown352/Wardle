export default async function getServerSideProps(req, res) {
  res.status(200).json(req)
}
