import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import AccountSidebar from "../../components/AccountSidebar";
import { Eye, ShoppingBag, FileText, ClockCounterClockwise, Package } from "@phosphor-icons/react";
import "../../../styles/components.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <Layout lang="en" showAds={true}>
      <div className="wpn-account-wrapper">
        <div className="wpn-account-container">
          <h1 className="wpn-heading-h1 wpn-heading--primary wpn-account__page-title">
            My account
          </h1>

          <div className="wpn-account-layout">
            {/* Sidebar Navigation */}
            <AccountSidebar currentPage="dashboard" onLogout={handleLogout} />

            {/* Main Content */}
            <div className="wpn-account-layout__main">
              {/* Welcome Message */}
              <div className="wpn-account-card">
                <p className="wpn-account-card__text">
                  Hello <strong>John Doe</strong> (not you?{" "}
                  <button onClick={handleLogout} className="wpn-link wpn-link--accent">
                    Log out
                  </button>
                  )
                </p>
                <p className="wpn-account-card__text wpn-account-card__text--muted">
                  From your account dashboard you can view your{" "}
                  <Link to="/my-account/orders" className="wpn-link wpn-link--accent">
                    recent orders
                  </Link>
                  , manage your{" "}
                  <Link to="/my-account/notices" className="wpn-link wpn-link--accent">
                    published notices
                  </Link>
                  , and edit your{" "}
                  <Link to="/my-account/profile" className="wpn-link wpn-link--accent">
                    account details
                  </Link>
                  .
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="wpn-account-stats">
                <div className="wpn-stat-card">
                  <div className="wpn-stat-card__icon-wrapper">
                    <ShoppingBag className="wpn-stat-card__icon" />
                  </div>
                  <div className="wpn-stat-card__value">12</div>
                  <div className="wpn-stat-card__label">Total orders</div>
                </div>

                <div className="wpn-stat-card">
                  <div className="wpn-stat-card__icon-wrapper">
                    <FileText className="wpn-stat-card__icon" />
                  </div>
                  <div className="wpn-stat-card__value">8</div>
                  <div className="wpn-stat-card__label">Published notices</div>
                </div>

                <div className="wpn-stat-card">
                  <div className="wpn-stat-card__icon-wrapper">
                    <ClockCounterClockwise className="wpn-stat-card__icon" />
                  </div>
                  <div className="wpn-stat-card__value">3</div>
                  <div className="wpn-stat-card__label">Pending review</div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <h2 className="wpn-account-card__title">Recent orders</h2>
                  <Link to="/my-account/orders" className="wpn-link wpn-link--accent wpn-link--sm">
                    View all
                  </Link>
                </div>
                
                <div className="wpn-table-wrapper">
                  <table className="wpn-table">
                    <thead className="wpn-table__head">
                      <tr className="wpn-table__row">
                        <th className="wpn-table__header">Order</th>
                        <th className="wpn-table__header">Date</th>
                        <th className="wpn-table__header">Status</th>
                        <th className="wpn-table__header">Total</th>
                        <th className="wpn-table__header">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="wpn-table__body">
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">#12345</td>
                        <td className="wpn-table__cell">March 14, 2026</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Completed
                          </span>
                        </td>
                        <td className="wpn-table__cell wpn-table__cell--semibold">R 2,450.00</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/my-account/orders/12345"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            View
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">#12344</td>
                        <td className="wpn-table__cell">March 10, 2026</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Completed
                          </span>
                        </td>
                        <td className="wpn-table__cell wpn-table__cell--semibold">R 1,200.00</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/my-account/orders/12344"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            View
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">#12343</td>
                        <td className="wpn-table__cell">March 5, 2026</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--warning">
                            Processing
                          </span>
                        </td>
                        <td className="wpn-table__cell wpn-table__cell--semibold">R 3,100.00</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/my-account/orders/12343"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            View
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
                  <h2 className="wpn-account-card__title">Recent notices</h2>
                  <Link to="/my-account/notices" className="wpn-link wpn-link--accent wpn-link--sm">
                    View all
                  </Link>
                </div>
                
                <div className="wpn-table-wrapper">
                  <table className="wpn-table">
                    <thead className="wpn-table__head">
                      <tr className="wpn-table__row">
                        <th className="wpn-table__header">Title</th>
                        <th className="wpn-table__header">Category</th>
                        <th className="wpn-table__header">Status</th>
                        <th className="wpn-table__header">Published</th>
                        <th className="wpn-table__header">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="wpn-table__body">
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">
                          Estate Notice - John Smith
                        </td>
                        <td className="wpn-table__cell">Estates</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Published
                          </span>
                        </td>
                        <td className="wpn-table__cell">March 12, 2026</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/notice/estate-notice-john-smith"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            View
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">
                          Liquor Licence Application
                        </td>
                        <td className="wpn-table__cell">Liquor Licences</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--warning">
                            Under review
                          </span>
                        </td>
                        <td className="wpn-table__cell">—</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/my-account/notices"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            View
                          </Link>
                        </td>
                      </tr>
                      <tr className="wpn-table__row">
                        <td className="wpn-table__cell wpn-table__cell--semibold">
                          Town Planning Rezoning
                        </td>
                        <td className="wpn-table__cell">Town Planning</td>
                        <td className="wpn-table__cell">
                          <span className="wpn-badge wpn-badge--success">
                            Published
                          </span>
                        </td>
                        <td className="wpn-table__cell">March 8, 2026</td>
                        <td className="wpn-table__cell">
                          <Link
                            to="/notice/town-planning-rezoning"
                            className="wpn-link wpn-link--accent wpn-link--sm"
                          >
                            <Eye className="wpn-icon wpn-icon--xs" />
                            View
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="wpn-account-card">
                <h2 className="wpn-account-card__title">Quick actions</h2>
                <div className="wpn-account-actions">
                  <Link to="/submit" className="wpn-button wpn-button--accent">
                    <FileText className="wpn-icon wpn-icon--sm" />
                    Submit new notice
                  </Link>
                  <Link to="/my-account/orders" className="wpn-button wpn-button--outline">
                    <ShoppingBag className="wpn-icon wpn-icon--sm" />
                    View all orders
                  </Link>
                  <Link to="/my-account/profile" className="wpn-button wpn-button--outline">
                    Edit account details
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