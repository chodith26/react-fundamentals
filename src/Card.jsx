function Card({children}){
    return(
        <div style={{ 
        backgroundColor: '#f9f9f9', 
        borderRadius: '12px', 
        padding: '24px', 
        textAlign: 'center', 
        width: '250px', 
        border: '1px solid #eee' 
        }}>
            {children}
        </div>
    )
}
export default Card;