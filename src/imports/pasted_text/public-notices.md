# **Public Notices**

## *Technical Specification*

---

[Post Type: public\_notice](#post-type:-public_notice)

[Purpose](#purpose)

[Reference Links](#reference-links)

[Field Structure](#field-structure)

[Notice Categories (with custom fields per type)](#notice-categories-\(with-custom-fields-per-type\))

[Display Templates](#display-templates)

[Archive Template (Shared)](#archive-template-\(shared\))

[Single Notice Template](#single-notice-template)

[Workflow Notes](#workflow-notes)

[Search and Filtering](#search-and-filtering)

[Monetisation](#monetisation)

---

# **Post Type: `public_notice`** {#post-type:-public_notice}

Public notices are time-sensitive, legally significant announcements often required to be publicly displayed for a set duration. While traditionally placed in newspapers, this listing type introduces a digital upsell for exposure on Novus Media sites.

---

# **Purpose** {#purpose}

* Support digital publication of **legal and public notices** alongside print listings.

* Upsell clients who place print notices to **also appear on the relevant website(s)**.

* Introduce filtering, SEO, pagination, and display logic to ensure notices meet **legal visibility** and **public accessibility** requirements.

---

# **Reference Links** {#reference-links}

**🔹 Archive (Main Landing Page):**  
 [https://www.news24.com/notices](https://www.news24.com/notices)

**🔹 Archive (Filtered by Category):**  
 [https://www.news24.com/notices?category=4040\&adtypesection=notices](https://www.news24.com/notices?category=4040&adtypesection=notices)

**🔹 Single Post Examples:**

* [Notice Example: Advertising Billboards](https://www.news24.com/news24/notices/notice/26ed6324-110d-4816-90bd-7b8bd75b4fa4/4040)

* [Notice Example: Court Orders](https://www.news24.com/news24/notices/notice/b1acfb1a-434d-4cb4-a23a-668e9691707b/4010)

* [Notice Example: Estates – Creditors](https://www.news24.com/news24/notices/notice/1b40afe8-ac5f-4b93-bda1-d57a57280da3/4201)

* [Notice Example: Tender](https://www.news24.com/news24/notices/notice/8c0019f2-ad0f-4ff7-86f1-1eab5d835c82/4080)

* [Notice Example: Town Establishment](https://www.news24.com/news24/notices/notice/830cb149-2bf6-465c-b82a-70a1d8bbcadf/4501)

---

# **Field Structure** {#field-structure}

| Field | Meta Key / Type | Details |
| ----- | ----- | ----- |
| **Title** | `post_title` | Short description of the notice or subject |
| **Excerpt** | `post_excerpt` | Short preview for search and archive grid |
| **Body Content** | `post_content` | Full legal text or description |
| **Category** | `notice_category` (Taxonomy) | Required — see list below |
| **Reference Number** | `reference_number` | Unique ref for legal/filing purposes |
| **Location** | `notice_location` | Town, city, province or region involved |
| **Date of Publication** | `publish_date` | Auto from post date, or overrideable |
| **Deadline for Objections** | `objection_deadline` | Optional for relevant notice types |
| **Contact Name** | `contact_name` | Internal or public contact |
| **Contact Email** | `contact_email` | For objection submissions or clarification |
| **Contact Phone** | `contact_phone` | Optional, depending on notice type |
| **Supporting File** | `notice_attachment` | Upload PDF/JPG version if supplied graphically |

---

# **Notice Categories (with custom fields per type)** {#notice-categories-(with-custom-fields-per-type)}

Each category has specific required fields. All share the **Ref No.** and **Location** base fields.

| Category | Additional Required Fields |
| ----- | ----- |
| Adoptions | Name |
| Advertising Billboards | Location, Reference number |
| AGM Meetings | *Currently no fields required* |
| Business Licence | Industry Name, Licence/Application number, Date, Location |
| Court Orders / Sequestrations / Liquidations | Case number, Court name, Company name |
| Curatorship | Name, Estate Number, Identity Number, Court |
| Demolition | Demolition Date, Location, Applicant |
| Divorce Antenuptial Motions | Court name & location, Case number, Names of parties |
| Estates: Creditors & Debtors | Name, Estate Number, Master’s Office, ID, Ref |
| Estates: Liquidation & Distribution | Name, Estate Number, Master’s Office, ID, Ref |
| General Notices | Name only |
| Insolvent Estates | Name, ID number, Ref, Estate number |
| Liquor Licences | Municipality, Establishment name, Location |
| Lost Documents | ERF/Deed number, Applicant, Ref number, Objection deadline |
| OIS Environmental Impact Studies | Applicant, Location, Application Number, Organisation Name |
| Pension Provident Funds | Company, Fund Name, Deadline |
| Public Auction | *Currently no fields required* |
| Re-registrations | Company Name, Registration Number |
| Rehabilitation | *Currently no fields required* |
| Sale of Business | Seller, Buyer, Company, Date of Sale |
| Sale of Execution | Plaintiff/Defendant name, Case number, Date, Location |
| Surrender of Estate | Name, ID, Court, Ref number |
| Tenders | Tender Number, Ref Number, Deadline |
| Town Establishment Founding | Municipality, Developers, Ref, Property, Town name |
| Town Planning | Municipality, Developers, Ref, Property description |

---

# **Display Templates** {#display-templates}

## **Archive Template (Shared)** {#archive-template-(shared)}

**Template Name:** `archive-public_notice.php`

* Grid layout with pagination

* Card content includes:

  * Title

  * Notice Category Badge

  * Date Published

  * Location

  * Excerpt

  * Ref No.

* **Pagination enabled**

* **FacetWP Filtering**

  * Categories (dropdown or icons)

  * Location

  * Date of publication

  * Sort by date

---

## **Single Notice Template** {#single-notice-template}

**Template Name:** `single-public_notice.php`

* Hero block: Title, Notice Category badge, Ref No., Publish Date

* Content split into two columns:

  * **Left (Main Body):** Full text / legal body content

  * **Right Sidebar:**

    * Ref No.

    * Category

    * Location

    * Deadline (if any)

    * Contact Details

    * Download button (for attached PDF/image)

* Ad slots in sidebars (standard format)

* “Related Notices” by category under content

---

# **Workflow Notes** {#workflow-notes}

| Step | Description |
| ----- | ----- |
| **Submission Method** | Via sales team when booked for print (often emailed as Word doc or graphic) |
| **Entry** | Entered by sales or editorial via WP Admin or imported from Pongrass |
| **Default Status** | Draft – requires editorial review |
| **Expiry Logic** | Optional: auto-expire after 30 days unless category requires longer |

---

# **Search and Filtering** {#search-and-filtering}

**Search Page Setup:**

* Install & configure **FacetWP** for live filtering

* Searchable by:

  * Title

  * Category

  * Location

  * Publish Date

  * Sort by: Newest/Oldest

---

# **Monetisation** {#monetisation}

* Public notices represent a **high-value upsell**:

  * Booked in newspaper → “Would you like to add online publication for RXXX?”

* Display counts & transparency may be required for legal compliance

* Future: Add downloadable certificate of publication (PDF proof)

---

**Notices Website**   
Reference

* English \- [https://www.news24.com/notices](https://www.news24.com/notices) 

Custom Fields & Templates: \[15.0\]

* Register the necessary custom fields per category.  
* Display a category badge on each entry within the main list of posts  
* Display pagination on main notices landing page and category archives. Do not use infinite scroll anywhere.  
* Create category specific single post templates for 25 categories.   
* NOTE: All notice categories listed below have a “Ref” field as well. 

*List of fields per category:*

* Adoptions  
  * Name  
* Advertising Billboards  
  * Location  
  * Reference number  
* AGM Meetings  
  * No results found  
* Business Licence  
  * Industry name  
  * Licence/Application number  
  * Date of application  
  * Location  
* Court Orders / Sequestrations / Liquidations  
  * Case number  
  * Court name  
  * Business/Company Name  
* Curatorship  
  * Name  
  * Case/Estate Number  
  * Master of High Court  
  * Identity number  
  * Master reference number  
* Demolition  
  * Demolition Date  
  * Location  
  * Applicant name  
* Divorce Antenuptial Motions  
  * Court name  
  * Court location  
  * Case number  
  * Name/surname of parties  
* Estates: Creditors \&amp; Debtors  
  * Name  
  * Case/Estate Number  
  * Magistrate/Masters office  
  * Identity number  
  * Master reference number  
* Estates: Liquidation \&amp; Distribution  
  * Name  
  * Case/Estate Number  
  * Magistrate/Masters office  
  * Identity number  
  * Master reference number  
* General Notices  
  * Name  
* Insolvent Estates  
  * Identity number  
  * Name  
  * Master reference number  
  * Case/Estate Number  
  * Contact Name  
  * Contact Email  
  * Contact Address  
  * Contact Phone?  
* Liquor Licences  
  * Municipality Name  
  * Establishment name  
  * Location  
* Lost Documents  
  * ERF/Deed number  
  * Applicant name  
  * Reference number  
  * Deadline for objections  
* OIS Environmental Impact Studies  
  * Applicant name  
  * Location  
  * Application number  
  * Business/Organisation Name  
* Pension Provident Funds  
  * Company/Employer Name  
  * Fund Name  
  * Deadline for objections  
* Public Auction  
  * No results found  
* Re-registrations  
  * Company Name  
  * Registration Number  
* Rehabilitation  
  * No results found  
* Sale of Business  
  * Seller Name  
  * Buyer name  
  * Date of Sale  
  * Company Name  
* Sale of Execution  
  * Plaintiff/defendant name  
  * Sale date  
  * Sale place  
  * Case number  
* Surrender of estate  
  * Identity Number  
  * Name  
  * Master/magistrate court  
  * Master reference number  
* Tenders  
  * Tender Number  
  * Reference number  
  * Deadline for objections  
* Town Establishment Founding  
  * Municipality Name  
  * Developers Names  
  * Reference number  
  * Property description  
  * Location/Name of Town  
* Town Planning  
  * Municipality Name  
  * Developers  
  * Reference number  
  * Property description

All Notices \[4.0\]

* Left hand sidebar with search form and filters.   
* Grid with a list of all notices on the system  
* Sort by 

Single Notice Template \[3.0\]

* Notice Description (body content area on the left)  
* Notice Details (right sidebar, aligned with top of post body)  
* Related posts (by category)  
* Ad slots to display placeholder ads. 

Search \- \[3.0\]

* **Filters:**  
  * Title, Content  
  * Categories (dropdown)  
  * Location  
  * Date of publication  
  * Categories (Icon selection)  
  * Sort By (date)