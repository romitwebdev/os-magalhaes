import React from "react";
import { Container } from "react-bootstrap";

const Map = () => {
    return (
        <>
            <Container>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56814.69342274008!2d-9.217039337835413!3d38.72342733011259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd1b26193e4b%3A0xca627dd447c76e5a!2sR.%20Jo%C3%A3o%20de%20Deus%2036-40%2C%20Amadora!5e0!3m2!1sen!2spt!4v1683120336889!5m2!1sen!2spt"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                ></iframe>
            </Container>
        </>
    );
};

export default Map;
