import '../../css/footer.css'


export default function Footer(){
    const today = new Date();
    const year= today.getFullYear();

    return(
        <div className="footerPg">
            <footer>
                <p>Copyright © {year}</p>
            </footer>
        </div>
    )
}