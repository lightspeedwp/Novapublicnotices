import { Link, useNavigate } from "react-router";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import { heroesAF } from "../../data/heroes/heroes.af";
import AccountSidebar from "../../components/AccountSidebar";
import { Eye, Download, Calendar, Package, CreditCard, Receipt } from "@phosphor-icons/react";
import "../../../styles/components.css";

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "completed" | "processing" | "pending" | "cancelled";
  total: string;
  items: number;
  paymentMethod: string;
}

export default function OrdersAF() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    alert("U is afgemeld.");
    navigate("/af/aanmeld");
  };

  // Mock order data
  const orders: Order[] = [
    {
      id: "1",
      orderNumber: "#12345",
      date: "14 Maart 2026",
      status: "completed",
      total: "R 2,450.00",
      items: 2,
      paymentMethod: "Kredietkaart",
    },
    {
      id: "2",
      orderNumber: "#12344",
      date: "10 Maart 2026",
      status: "completed",
      total: "R 1,200.00",
      items: 1,
      paymentMethod: "EFT",
    },
    {
      id: "3",
      orderNumber: "#12343",
      date: "5 Maart 2026",
      status: "processing",
      total: "R 3,100.00",
      items: 3,
      paymentMethod: "Kredietkaart",
    },
    {
      id: "4",
      orderNumber: "#12342",
      date: "28 Februarie 2026",
      status: "completed",
      total: "R 890.00",
      items: 1,
      paymentMethod: "Kitsbetaling",
    },
    {
      id: "5",
      orderNumber: "#12341",
      date: "20 Februarie 2026",
      status: "completed",
      total: "R 1,750.00",
      items: 2,
      paymentMethod: "Kredietkaart",
    },
  ];

  const getStatusBadge = (status: Order["status"]) => {
    const badges = {
      completed: "wpn-badge--success",
      processing: "wpn-badge--warning",
      pending: "wpn-badge--info",
      cancelled: "wpn-badge--danger",
    };
    return badges[status];
  };

  const getStatusText = (status: Order["status"]) => {
    const labels = {
      completed: "Voltooi",
      processing: "Verwerk",
      pending: "Wag betaling",
      cancelled: "Gekanselleer",
    };
    return labels[status];
  };

  return (
    <Layout lang="af" showAds={true}>
      {/* Hero Section */}
      <Hero data={heroesAF.myOrders} lang="af" />

      <div className="wpn-account-wrapper">
        <div className="wpn-account-container">
          <h1 className="wpn-heading-h1 wpn-heading--primary wpn-account__page-title">
            My bestellings
          </h1>

          <div className="wpn-account-layout">
            {/* Sidebar Navigation */}
            <AccountSidebar currentPage="orders" onLogout={handleLogout} lang="af" />

            {/* Main Content */}
            <div className="wpn-account-layout__main">
              {/* Orders Summary */}
              <div className="wpn-account-card">
                <div className="wpn-account-card__header">
                  <h2 className="wpn-account-card__title">Bestellingsgeskiedenis</h2>
                  <span className="wpn-text-muted wpn-link--sm">
                    {orders.length} totale bestellings
                  </span>
                </div>

                {/* Orders List */}
                <div className="wpn-orders-list">
                  {orders.map((order) => (
                    <div key={order.id} className="wpn-order-card">
                      <div className="wpn-order-card__header">
                        <div className="wpn-order-card__header-left">
                          <div className="wpn-order-card__number">
                            <Receipt className="wpn-icon wpn-icon--sm wpn-text--muted" />
                            <span className="wpn-order-card__number-text">
                              Bestelling {order.orderNumber}
                            </span>
                          </div>
                          <div className="wpn-order-card__date">
                            <Calendar className="wpn-icon wpn-icon--xs wpn-text--muted" />
                            <span>{order.date}</span>
                          </div>
                        </div>
                        <div className="wpn-order-card__header-right">
                          <span className={`wpn-badge ${getStatusBadge(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                      </div>

                      <div className="wpn-order-card__body">
                        <div className="wpn-order-card__details">
                          <div className="wpn-order-card__detail">
                            <Package className="wpn-icon wpn-icon--sm wpn-text--muted" />
                            <span className="wpn-order-card__detail-label">Items:</span>
                            <span className="wpn-order-card__detail-value">{order.items}</span>
                          </div>
                          <div className="wpn-order-card__detail">
                            <CreditCard className="wpn-icon wpn-icon--sm wpn-text--muted" />
                            <span className="wpn-order-card__detail-label">Betaling:</span>
                            <span className="wpn-order-card__detail-value">{order.paymentMethod}</span>
                          </div>
                        </div>

                        <div className="wpn-order-card__total">
                          <span className="wpn-order-card__total-label">Totaal:</span>
                          <span className="wpn-order-card__total-value">{order.total}</span>
                        </div>
                      </div>

                      <div className="wpn-order-card__footer">
                        <Link
                          to={`/af/my-rekening/bestellings/${order.id}`}
                          className="wpn-button wpn-button--sm wpn-button--outline"
                        >
                          <Eye className="wpn-icon wpn-icon--sm" />
                          Bekyk besonderhede
                        </Link>
                        <button className="wpn-button wpn-button--sm wpn-button--outline">
                          <Download className="wpn-icon wpn-icon--sm" />
                          Laai faktuur af
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help Section */}
              <div className="wpn-account-card">
                <h2 className="wpn-account-card__title">Benodig hulp met 'n bestelling?</h2>
                <p className="wpn-account-card__text wpn-account-card__text--muted">
                  As u vrae het oor u bestelling, betaling, of faktuur, kontak asseblief ons ondersteuningspan.
                </p>
                <div className="wpn-account-actions">
                  <Link to="/af/kontak" className="wpn-button wpn-button--outline">
                    Kontak ondersteuning
                  </Link>
                  <Link to="/af/faq" className="wpn-button wpn-button--outline">
                    Bekyk FAQ's
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
