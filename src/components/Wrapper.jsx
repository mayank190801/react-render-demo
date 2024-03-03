
const Normal = () => {
    return <div>
        <ActualWrapper>
            <div>Hey brother</div>
        </ActualWrapper>
        <Wrapper TextComponent={<TextComponent />} />
    </div>
}

//Fake Syntax 
const Wrapper = ({ TextComponent }) => {
    return <div style={{ border: "2px solid black" }}>{TextComponent}</div>
}

const TextComponent = () => {
    return <div>
        Hi There
    </div>
}

//Actual Syntax that would be used
const ActualWrapper = ({ children }) => {
    return <div style={{ backgroundColor: "yellow", margin: 10, padding: 10 }}>
        {children}
    </div>
}

export default Normal;




