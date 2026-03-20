import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { useHero } from "../../hooks/useHero";
import AccountSidebar from "../../components/AccountSidebar";
import { Eye, ShoppingBag, FileText, ClockCounterClockwise } from "@phosphor-icons/react";
import "../../../styles/components.css";

export default function DashboardAF() {
  const heroData = useHero('account', 'af');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("U is afgemeld.");
    navigate("/af/aanmeld");
  };

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      {heroData && <Hero data={heroData} lang="af" />}

      <div className="wpn-account-wrapper">
        <div className="wpn-account-container">
          <div className="wpn-account-layout">
            {/* Sidebar Navigation */}
            <AccountSidebar currentPage="dashboard" onLogout={handleLogout} lang="af" />

            {/* Main Content */}
            <div className="wpn-account-layout__main">
              {/* Welcome Message */}
              <div className="wpn-account-card">
                <p className="wpn-account-card__text">
                  Hallo <strong>Jan Doe</strong> (nie u nie?{" "}
                  <button onClick={handleLogout} className="wpn-link wpn-link--accent">
                    Meld af
                  </button>
                  )
                </p>
                <p className="wpn-account-card__text wpn-account-card__text--muted">
                  Vanaf u rekening dashboard kan u{" "}
                  <Link to="/af/my-rekening/bestellings" className="wpn-link wpn-link--accent">
                    onlangse bestellings
                  </Link>{" "}
                  bekyk, u{" "}
                  <Link to="/af/my-rekening/kennisgewings" className="wpn-link wpn-link--accent">
                    gepubliseerde kennisgewings
                  </Link>{" "}
                  bestuur, en u{" "}
                  <Link to="/af/my-rekening/profiel" className="wpn-link wpn-link--accent">
                    rekening besonderhede
                  </Link>{" "}
                  wysig.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="wpn-account-stats">
                <div className="wpn-stat-card">
                  <div className="wpn-stat-card__icon-wrapper">
                    <ShoppingBag className="wpn-stat-card__icon" />
                  </div>
                  <div className="wpn-stat-card__value">12</div>
                  <div className="wpn-stat-card__label">Totale bestellings</div>
                </div>

                <div className="wpn-stat-card">
                  <div className="wpn-stat-card__icon-wrapper">
                    <FileText className="wpn-stat-card__icon" />
                  </div>
                  <div className="wpn-stat-card__value">8</div>
                  <div className="wpn-stat-card__label">Gepubliseerde kennisgewings</div>
                </div>

                <div className="wpn-stat-card">
                  <div className="wpn-stat-card__icon-wrapper">
                    <ClockCounterClockwise className="wpn-stat-card__icon" />
                  </div>
                  <div className="wpn-stat-card__value">3</div>
                  <div className="wpn-stat-card__label">Wag hersien</div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <h2 className="wpn-account-card__title">Onlangse bestellings</h2>
                  <Link to="/af/my-rekening/bestellings" className="wpn-link wpn-link--accent wpn-link--sm">
                    Bekyk alles
                  </Link>
                </div>
                
                <div className="wpn-table-wrapper">
                  <table className="wpn-table">
                    <thead className="wpn-table__head">
                      <tr className="wpn-table__row">
                        <th className="wpn-table__header">Bestelling</th>
                        <th className="wpn-table__header">Datum</th>
                        <th className="wpn-table__header">Status</th>
                        <th className="wpn-table__header">Totaal</th>
                        <th className="wpn-table__header">Aksies</th>
                      </tr>
                    </thead>
                    <tbody className="wpn-table__body">
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">#12345</td>
                        <td className="wpn-table__cell">14 Maart 2026</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Voltooi
                          </span>
                        </td>
                        <td className="wpn-table__cell wpn-table__cell--semibold">R 2,450.00</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/af/my-rekening/bestellings/12345"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            Bekyk
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">#12344</td>
                        <td className="wpn-table__cell">10 Maart 2026</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Voltooi
                          </span>
                        </td>
                        <td className="wpn-table__cell wpn-table__cell--semibold">R 1,200.00</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/af/my-rekening/bestellings/12344"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            Bekyk
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">#12343</td>
                        <td className="wpn-table__cell">5 Maart 2026</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--warning">
                            Verwerk
                          </span>
                        </td>
                        <td className="wpn-table__cell wpn-table__cell--semibold">R 3,100.00</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/af/my-rekening/bestellings/12343"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            Bekyk
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Notices */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <h2 className="wpn-account-card__title">Onlangse kennisgewings</h2>
                  <Link to="/af/my-rekening/kennisgewings" className="wpn-link wpn-link--accent wpn-link--sm">
                    Bekyk alles
                  </Link>
                </div>
                
                <div className="wpn-table-wrapper">
                  <table className="wpn-table">
                    <thead className="wpn-table__head">
                      <tr className="wpn-table__row">
                        <th className="wpn-table__header">Titel</th>
                        <th className="wpn-table__header">Kategorie</th>
                        <th className="wpn-table__header">Status</th>
                        <th className="wpn-table__header">Gepubliseer</th>
                        <th className="wpn-table__header">Aksies</th>
                      </tr>
                    </thead>
                    <tbody className="wpn-table__body">
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">
                          Boedelkennisgewing - Jan Smith
                        </td>
                        <td className="wpn-table__cell">Boedels</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Gepubliseer
                          </span>
                        </td>
                        <td className="wpn-table__cell">12 Maart 2026</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/af/kennisgewing/boedelkennisgewing-jan-smith"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            Bekyk
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">
                          Dranklisensiieaansoek
                        </td>
                        <td className="wpn-table__cell">Dranklisensies</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--warning">
                            Onder hersiening
                          </span>
                        </td>
                        <td className="wpn-table__cell">—</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/af/my-rekening/kennisgewings"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            Bekyk
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">
                          Dorpsbeplanningshetsonering
                        </td>
                        <td className="wpn-table__cell">Dorpsbeplanning</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Gepubliseer
                          </span>
                        </td>
                        <td className="wpn-table__cell">8 Maart 2026</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/af/kennisgewing/dorpsbeplanning-hersonering"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            Bekyk
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="wpn-account-card">
                <h2 className="wpn-account-card__title">Vinnige aksies</h2>
                <div className="wpn-account-actions">
                  <Link to="/af/indien" className="wpn-button wpn-button--accent">
                    <FileText className="wpn-icon wpn-icon--sm" />
                    Dien nuwe kennisgewing in
                  </Link>
                  <Link to="/af/my-rekening/bestellings" className="wpn-button wpn-button--outline">
                    <ShoppingBag className="wpn-icon wpn-icon--sm" />
                    Bekyk alle bestellings
                  </Link>
                  <Link to="/af/my-rekening/profiel" className="wpn-button wpn-button--outline">
                    Wysig rekeningbesonderhede
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}