const Button = ({ value, className }) => (
    <div className={className + " flex flex-col items-center drop-shadow-lg"}>
        <input type="button" value={value} className="bg-primary px-12 py-2 rounded-3xl uppercase text-2xl font-semibold cursor-pointer"/>
    </div>
);

export default Button;