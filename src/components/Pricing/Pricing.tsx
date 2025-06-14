import { Button } from '@/components/ui/button'


interface PricingProps {
  title: string
  subTitle: string
  features: string[]
  price: number
  billed: 'hourly' | 'monthly'
  lessonType: 'Team' | 'Private'
}

export const Pricing = ({ title, subTitle, features, price, lessonType, billed }: PricingProps) => {
  const handleClick = () => {
    if (lessonType === 'Team') {
      window.open('https://appt.link/meet-with-florida-hunters-L6IdPlQm/in-person-meeting', '_blank')
    } else if (lessonType === 'Private') {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSedyKi1-gLDlcg8Bf2Gv35WgCH7IGyTt2-PPinGL5BS_gPQYw/viewform?usp=pp_url', '_blank')
    }
  }

  return (
    <div className="w-full md:max-w-xs mx-auto m-2 overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 h-[150px]">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{subTitle}</p>
      </div>
      <div className="px-6 py-4">
        <div className="text-4xl font-bold text-gray-800">${price}<span className="text-lg text-gray-600"> / {lessonType === 'Private' ? ' Starting' : billed}</span></div>
        {lessonType === 'Private' ? <p className="text-gray-600">80$ - {billed}</p> : <p className="text-gray-600">Free Tryout -  45min</p>}
      </div>
      <div className="px-6 py-4">
        <ul className="text-gray-600">
          {features.map((feature, id) => (

            <li key={id} className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 pt-4 pb-6">

        <Button
          onClick={handleClick}
          className="block w-full px-4 py-2 font-semibold text-center text-white rounded">{lessonType === 'Private' ? 'Get Started' : 'Take a trial'}</Button>
      </div>
    </div>
  )
}
