import Header from "./Header";
import Button from "./Button";

const WaitingRoomPage = () => (
    <div className="flex flex-col h-screen max-w-lg m-auto py-4">
        <section className="basis-1/4">
            <Header/>
        </section>
        <section className="basis-2/4 flex flex-col justify-center mt-6">
            <PlayersList/>
            <Button value="Start" className="mt-4"/>

        </section>
    </div>
);

const PlayersList = () => (
    <div className="m-8 py-12 text-white text-3xl bg-secondary">
        <div className="flex flex-col items-center">
            <ul className="text-center">
                <li className="my-2">Marta</li>
                <li className="my-2">Piotr</li>
                <li className="my-2">Maciek</li>
                <li className="my-2">Ola</li>
                <li className="my-2">Ania</li>
            </ul>
        </div>
    </div>
);

export default WaitingRoomPage;