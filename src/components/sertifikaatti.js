import '../styles/certificate.css'

export function Sertifikaatti ({ name, img, children, verify }) {
    return <div className="certificate">
        <img src={img} alt={name} />
        <div className='certificate-info'>
            {children}
            <a href={verify}
                className='verify-certificate'>
                verify
            </a>
        </div>
    </div>
}