import "./Footer.css"


const Footer = () => {
    return (
        <>

            <footer class="footer">
                <p>
                    Copyright ©
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                    Erne1984
                </p>
                <a href="https://github.com/Erne1984" target="_blank">
                    <i class="fab fa-github"></i></a>
            </footer>

        </>
    )
}


export default Footer;