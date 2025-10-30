// app/components/MissionVision.jsx
const imgShield = "https://www.figma.com/api/mcp/asset/529f2d8c-b5ec-4424-868b-b224644a0188";
const imgEye = "https://www.figma.com/api/mcp/asset/e674f7ce-d87e-46c3-9f03-176dad732149";
const imgHandshake = "https://www.figma.com/api/mcp/asset/d265d025-5800-44e4-b15a-36c106d04f50";

export default function MissionVision() {
  return (
    <section className="mission container">
      <div className="mission-grid">
        <div className="mission-card">
          <h4>Mission</h4>
          <p>
            At Rimora Properties, our mission is to provide Nigerians and diaspora investors with safe, verified,
            and FCDA-approved land in Abuja — eliminating the fear of scams and ensuring long-term investment security.
          </p>
        </div>

        <div className="vision-card">
          <h4>Vision</h4>
          <p>
            To become Africa’s most trusted land brokerage firm by championing transparency, consistency, and digital
            innovation in the real estate market.
          </p>
        </div>

        <div className="core-values">
          <h4>Core values</h4>
          <div className="values-row">
            <div className="value">
              <img src={imgShield} alt="integrity" />
              <div className="value-text">Integrity</div>
            </div>

            <div className="value">
              <img src={imgEye} alt="transparency" />
              <div className="value-text">Transparency</div>
            </div>

            <div className="value">
              <img src={imgHandshake} alt="professionalism" />
              <div className="value-text">Professionalism</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
