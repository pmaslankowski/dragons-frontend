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
  
const Header = () => (
    <div className="text-center p-4">
        <h1 className="uppercase text-5xl">Smoki</h1>
        <div className="flex flex-row justify-between px-8 py-6">
            <Card additionalClass="w-1/4 rotate-[25deg]">5</Card>
            <Card additionalClass="w-1/4 -rotate-[20deg] relative top-12">8</Card>
            <Card additionalClass="w-1/4 rotate-[10deg] relative top-4">-2</Card>
        </div>
    </div>
);

  
const Card = ({additionalClass, children}) => {
    let baseClasses = "text-primary border border-black aspect-[2/3] \
        text-center flex items-center justify-center text-5xl \
        rounded-lg shadow-xl";

    return (
        <div className={baseClasses + " " + additionalClass}>
            { children }
        </div>    
    )
};
  
const JoinForm = () => (
    <div className="p-4">
        <form>
            <div className="bg-secondary px-6 py-4 m-4">
                <label className="block text-white text-2xl">Imię</label>
                <input type="text" className="mt-4 w-full h-10 px-2 text-xl" />
            </div>
            <div className="flex flex-col items-center">
                <input type="button" value="Wejdź" className="bg-primary px-8 py-2 rounded-3xl uppercase text-xl font-semibold cursor-pointer"/>
            </div>
        </form>
    </div>
);

export default JoinPage;