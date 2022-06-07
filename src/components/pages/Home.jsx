import FeedbackList from "../FeedbackList"
import FeedbackStats from "../FeedbackStats"
import FeedbackForm from "../FeedbackForm"

function Home() {
    return (
        <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </>
    )
}

export default Home