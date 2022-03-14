import findOrCreate from '../../../components/prismaQueries/findOrCreate'

export default async function getServerSideProps(req, res) {

  if(req.method !== 'POST'){
    return res.status(405).json({message: 'Method not allowed'})
  }

  const user = await findOrCreate(req)
  res.status(200).send(user)
}
