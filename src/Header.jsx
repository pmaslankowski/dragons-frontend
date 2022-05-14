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
    let baseClasses = `text-primary border border-black aspect-[2/3]
        text-center flex items-center justify-center text-5xl
        rounded-lg shadow-xl`;

    return (
        <div className={baseClasses + " " + additionalClass}>
            { children }
        </div>    
    )
};

export default Header;