import HeaderBox from "@/components/ui/HeaderBox"
import RightSidebar from "@/components/ui/RightSidebar"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"

const Home = () => {
  const loggedIn = { firstName: 'Alejandro', lastName: 'Soto', email: "alejandrosotonmd@gmail.com"}

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and trasanctions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234567.89}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.45}, {currentBalance: 500.45}]}
      />
    </section>
  )
}

export default Home
