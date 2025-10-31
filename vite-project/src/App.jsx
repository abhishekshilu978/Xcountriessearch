import { useEffect, useState } from "react";

function App(){
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetch(
            "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
        )
        .then((res) => res.json())
        .then((data) => {
            setCountries(data);
        })
        .catch((error) => {
            console.error("Error fetching countries:", error);
        });
        },[]
        );
        const filteredCountries = countries.filter((country) => 
            country.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return (
            <div style={{ padding: "20px" }}>
                <input type="text" 
                placeholder="Search for countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: "100%",
                    // maxWidth: "600px",
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "20px",
                    // paddingLeft: "25%"
                }}
                />
                <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "center",
                }}
                >
                    {filteredCountries.map((country, index) => (
                        <div
                        className="countryCard"
                        key={country.common + index}
                        style={{
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "10px",
                            textAlign: "center",
                            width: "150px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                        >
                            <img src={country.png} 
                            alt={country.common}
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "contain",
                                marginBottom: "10px",
                            }}
                             />
                             <p
                             style={{
                                fontWeight: "bold"
                             }}
                             >
                                {country.common}

                             </p>

                        </div>
                    ))}

                </div>

            </div>
        );
}
export default App;