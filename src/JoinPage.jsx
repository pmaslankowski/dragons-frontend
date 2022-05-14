import Header from './Header';
import Button from './Button';

const JoinPage = () => (
    <div className="flex flex-col h-screen max-w-lg m-auto py-4">
        <section className="basis-1/4">
            <Header/>
        </section>
        <section className="basis-2/4 flex flex-col justify-center">
            <JoinForm/>
        </section>
    </div>
);
  
const JoinForm = () => (
    <div className="p-4">
        <form>
            <div className="bg-secondary px-6 py-4 m-4">
                <label className="block text-white text-2xl">Imię</label>
                <input type="text" className="mt-4 w-full h-10 px-2 text-xl" />
            </div>
            <Button value="Wejdź" className="pt-4"/>
        </form>
    </div>
);

export default JoinPage;