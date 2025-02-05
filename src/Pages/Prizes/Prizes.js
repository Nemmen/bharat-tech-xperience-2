import { Award, Gift, Trophy, Briefcase, DollarSign } from "lucide-react"

const PrizeSection = () => {
  const prizeDetails = [
    {
      icon: <DollarSign className="w-12 h-12 text-green-400" />,
      title: "₹1,00,000 Cash Prize",
      description: "Compete for a total cash pool of 1 lakh rupees!",
    },
    {
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
      title: "25 Prestigious Titles",
      description:
        "Win recognition in various categories like 'Most Innovative Solution', 'Best UI/UX Design', and more!",
    },
    {
      icon: <Gift className="w-12 h-12 text-pink-400" />,
      title: "Exclusive Swag Kits",
      description: "Each title winner receives a custom swag kit filled with tech goodies and memorabilia.",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-400" />,
      title: "Internship Opportunities",
      description: "Top performers may get a chance to intern with leading tech companies.",
    },
    {
      icon: <Award className="w-12 h-12 text-purple-400" />,
      title: "Mentorship Programs",
      description: "Win exclusive mentorship sessions with industry experts for career guidance.",
    },
  ]

  return (
    <section className="w-full py-20 bg-inherit text-white">
      <div className="w-11/12 container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-orange-400">
            ₹1,00,000 Cash Prize + 25 Exciting Titles!
          </span>
        </h2>
        <p className="text-2xl text-center mb-12 text-gray-300">
          Compete for cash, prestigious titles, and exclusive prizes!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {prizeDetails.map((item, index) => (
            <div
              key={index}
              className="bg-black/25 rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-gray-700 hover:border-gray-500 transition-colors duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{item.title}</h3>
              <p className="text-base text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4 mt-16">
          <p className="text-xl text-gray-300">
            Whether you're a seasoned developer or just starting out, Bharat Tech Xperience 2.0 offers a chance to win
            big and gain recognition.
          </p>
          <p className="text-xl font-semibold text-gray-200">
            Join us for this thrilling 30-hour journey of innovation, where every participant has the opportunity to
            shine and compete for both cash and glory.
          </p>
          <p className="text-2xl font-bold text-blue-400">Showcase your talent, win cash, and claim your title!</p>
        </div>
      </div>
    </section>
  )
}

export default PrizeSection

