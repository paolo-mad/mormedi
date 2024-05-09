import ClientsDash from "../components/ClientsDash"
import OffersDash from "../components/OffersDash"

const Dashboard = () => {
  return (
    <>
      <div className="containerMain">
        <div>
          <div>
            <ClientsDash/>
          </div>
          <div>
            <OffersDash />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
