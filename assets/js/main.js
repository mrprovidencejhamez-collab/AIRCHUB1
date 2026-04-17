        // Logos mapping: report name key -> domain for favicon (Google favicon API)
        const logoMap = {
            'Landing Page': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHmjRk7reipCIoYUF_OpznpijBJwk_ib9SA&s',
            'Enterprise Report': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHmjRk7reipCIoYUF_OpznpijBJwk_ib9SA&s',
            'MYHR Absenteeism AIRC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHmjRk7reipCIoYUF_OpznpijBJwk_ib9SA&s',
            'AIRC Progress': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHmjRk7reipCIoYUF_OpznpijBJwk_ib9SA&s',
            'AIRC-1800 Flowers': '1800flowers.com',
            'AIRC-AHMC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIpKdZ73PHvm0wBKbNcrK0_GCmzAcX_f9grA&s',
            'AIRC-ANA': 'ana.co.jp',
            'AIRC-APTELLA': 'https://yt3.googleusercontent.com/ytc/AIdro_lJ1DzbNc4T1ohj93gdwSTsEdqHtPG1LTe4lOuXjcsv6ao=s900-c-k-c0x00ffffff-no-rj',
            'AIRC-ASC LTD.': 'ascbrands.com',
            'AIRC-ASUS': 'asus.com',
            'AIRC-AUB': 'aub.com.ph',
            'AIRC-Bandai': 'bandai.com',
            'AIRC-BDO Collection': 'bdo.com.ph',
            'AIRC-BDO Core': 'bdo.com.ph',
            'AIRC-BDO Elite': 'bdo.com.ph',
            'AIRC-BDO Insure': 'bdo.com.ph',
            'AIRC-BDO Life': 'bdo.com.ph',
            'AIRC-BDO MSU': 'bdo.com.ph',
            'AIRC-BDO Non-voice': 'bdo.com.ph',
            'AIRC-BDO Outsource': 'bdo.com.ph',
            'AIRC-BDO SMS': 'bdo.com.ph',
            'AIRC-BDO Telops': 'bdo.com.ph',
            'AIRC-BPI CARDS': 'bpiexpressonline.com',
            'AIRC-BPI Non-Voice': 'bpiexpressonline.com',
            'AIRC-Bridges': 'bridges.com',
            'AIRC-Castle Branch Non-Voice': 'castlebranch.com',
            'AIRC-Castle Branch Voice': 'castlebranch.com',
            'AIRC-Cignal': 'cignal.tv',
            'AIRC-Coinstar': 'coinstar.com',
            'AIRC-Construct Connect': 'construction.com',
            'AIRC-CPS': 'cps.com',
            'AIRC-DISA Voice': 'disa.com',
            'AIRC-DISA Written': 'disa.com',
            'AIRC-Dish Billing and Credit': 'dish.com',
            'AIRC-Dish CXO': 'dish.com',
            'AIRC-Dish Wireless': 'dish.com',
            'AIRC-EV Connect': 'evconnect.com',
            'AIRC-Eve\'s Addiction': 'evesaddiction.com',
            'AIRC-Experian': 'experian.com',
            'AIRC-FC': 'flightcentre.com.au',
            'AIRC-FYF': 'fyf.com',
            'AIRC-Glico': 'glico.com',
            'AIRC-Grab': 'grab.com',
            'AIRC-Greenlane': 'greenlane.com',
            'AIRC-Hallmark': 'hallmark.com',
            'AIRC-IDIQ': 'idiq.com',
            'AIRC-Kalahari': 'kalahari.com',
            'AIRC-Kyocera': 'kyocera.com',
            'AIRC-M365': 'microsoft.com',
            'AIRC-Maya': 'maya.ph',
            'AIRC-Maya Hotline': 'maya.ph',
            'AIRC-MDH': 'mdh.com',
            'AIRC-Meralco Back Office': 'https://company.meralco.com.ph/themes/custom/meralco/default/images/logo.png',
            'AIRC-Meralco Digital': 'https://company.meralco.com.ph/themes/custom/meralco/default/images/logo.png',
            'AIRC-Meralco Voice': 'https://company.meralco.com.ph/themes/custom/meralco/default/images/logo.png',
            'AIRC-MKI': 'mki.com',
            'AIRC-PACSUN': 'pacsun.com',
            'AIRC-Palawan': 'palawanpawnshop.com',
            'AIRC-RCBC IB': 'rcbc.com',
            'AIRC-RCBC Instaloan': 'rcbc.com',
            'AIRC-RCBC OB': 'rcbc.com',
            'AIRC-SBI Remit': 'https://www.sbicosmoney.com/img/sbicosmoney_white.svg',
            'AIRC-Sharkninja': 'sharkninja.com',
            'AIRC-Shopee': 'shopee.com',
            'AIRC-SLMC': 'stlukes.com.ph',
            'AIRC-Teleflora': 'teleflora.com',
            'AIRC-Tenso': 'tenso.com',
            'AIRC-UNIQLO Non-voice': 'uniqlo.com',
            'AIRC-UNIQLO Universalist': 'uniqlo.com',
            'AIRC-Viagogo': 'viagogo.com',
            'PAL-ATTENDANCE': 'philippineairlines.com',
            'PAL-VOICE': 'philippineairlines.com',
            'EPLDT': 'epldt.com',
            'PLDT SOCIAL MEDIA': 'pldt.com',
            'PLDT-177 EMAIL CENTER': 'pldt.com',
            'PLDT-177 SOCIAL MEDIA': 'pldt.com',
            'PLDT-BILLING AND ACCOUNTS': 'pldt.com',
            'PLDT-CCBO': 'pldt.com',
            'PLDT-CENTRAL FULFILLMENT': 'pldt.com',
            'PLDT-CREDIT VALIDATION TEAM': 'pldt.com',
            'PLDT-CWT ENTERPRISE': 'pldt.com',
            'PLDT-CWT RESIDENTIAL': 'pldt.com',
            'PLDT-ENTERPRISE BACK OF HOUSE': 'pldt.com',
            'PLDT-ENTERPRISE EMAIL': 'pldt.com',
            'PLDT-ENTERPRISE HOTLINE': 'pldt.com',
            'PLDT-ENTERPRISE WEB TO LEAD': 'pldt.com',
            'PLDT-HOME CARE': 'pldt.com',
            'PLDT-HOME COLLECTION': 'pldt.com',
            'PLDT-HOME UHW': 'pldt.com',
            'PLDT-PLDT TELESALES': 'pldt.com',
            'PLDT-POSTPAID FIELD SERVICE': 'pldt.com',
            'PLDT-PREPAID FIBER': 'pldt.com',
            'PLDT-RED FIBER': 'pldt.com',
            'PLDT-REPAIR': 'pldt.com',
            'PLDT-RETENTION': 'pldt.com',
            'PNB': 'pnb.com.ph',
            'SMART-EBG CORPORATE EMAIL': 'https://logodix.com/logo/1195036.png',
            'SMART-EBG ENTERPRISE': 'https://logodix.com/logo/1195036.png',
            'SMART-ENTERPRISE BACK OFFICE/HYPER ECARE': 'https://logodix.com/logo/1195036.png',
            'SMART-ENTERPRISE RETENTION': 'https://logodix.com/logo/1195036.png',
            'SMART-HYPERCARE': 'https://logodix.com/logo/1195036.png',
            'SMART-INFINITY': 'https://logodix.com/logo/1195036.png',
            'SMART-L2 UNIVERSALIST': 'https://logodix.com/logo/1195036.png',
            'SMART-Onlinesales': 'https://logodix.com/logo/1195036.png',
            'SMART-POSTPAID': 'https://logodix.com/logo/1195036.png',
            'SMART-PREPAID': 'https://logodix.com/logo/1195036.png',
            'SMART-SIM REGISTRATION': 'https://logodix.com/logo/1195036.png',
            'SMART-SOCIAL MEDIA': 'https://logodix.com/logo/1195036.png',
            'SMART-TELESALES': 'https://logodix.com/logo/1195036.png',
            'SMART-TRADE': 'https://logodix.com/logo/1195036.png',
            'VITRO': 'https://cdn.manilastandard.net/wp-content/uploads/2024/11/VITRO-Data-Center.jpg'
        };

        // Dynamic Data Globals
        let reports = window.APP_REPORTS || [];
        let sectorData = window.APP_SECTORS || [];
        let USERS = window.APP_USERS || {};
        
        async function fetchInitialData() {
            // Because we load the datastores as external native script resources (JSONP pattern),
            // they are already instantiated on the window object securely bypassing offline CORS.
            console.log("Offline-ready database successfully linked!");
        }
        fetchInitialData();

        // UI State Globals restored
        let currentTab = 'program'; // default tab
        let selectedGroupFilter = '';
        let selectedSectorFilter = '';
        const expandedGroups = new Set();
        let currentUser = null; // { username, role }

        // Global Greeting Utility
        const getGreetingTimeBased = (name) => {
            const hour = new Date().getHours();
            if (hour < 12) return `Good morning, ${name}`;
            if (hour < 18) return `Good afternoon, ${name}`;
            return `Good evening, ${name}`;
        };

        // Report name -> group key (for grouping)/ REPORT GROUPING
        const groupMap = {
            'Progress Report': 'Progress Report', 'Landing Page': 'General', 'Enterprise Report': 'General', 'MYHR Absenteeism AIRC': 'General', 'AIRC Progress': 'General',
            'AIRC-1800 Flowers': '1800 Flowers', 'AIRC-AHMC': 'AHMC', 'AIRC-ANA': 'ANA', 'AIRC-APTELLA': 'APTELLA',
            'AIRC-ASC LTD.': 'ASC LTD.', 'AIRC-ASUS': 'ASUS', 'AIRC-AUB': 'AUB', 'AIRC-Bandai': 'Bandai',
            'AIRC-BDO Collection': 'BDO', 'AIRC-BDO Core': 'BDO', 'AIRC-BDO Elite': 'BDO', 'AIRC-BDO Insure': 'BDO',
            'AIRC-BDO Life': 'BDO', 'AIRC-BDO MSU': 'BDO', 'AIRC-BDO Non-voice': 'BDO', 'AIRC-BDO Outsource': 'BDO',
            'AIRC-BDO SMS': 'BDO', 'AIRC-BDO Telops': 'BDO', 'AIRC-BPI CARDS': 'BPI', 'AIRC-BPI Non-Voice': 'BPI',
            'AIRC-Bridges': 'Bridges', 'AIRC-Castle Branch Non-Voice': 'Castle Branch', 'AIRC-Castle Branch Voice': 'Castle Branch',
            'AIRC-Cignal': 'Cignal', 'AIRC-Coinstar': 'Coinstar', 'AIRC-Construct Connect': 'Construct Connect',
            'AIRC-CPS': 'CPS', 'AIRC-DISA Voice': 'DISA', 'AIRC-DISA Written': 'DISA',
            'AIRC-Dish Billing and Credit': 'Dish', 'AIRC-Dish CXO': 'Dish', 'AIRC-Dish Wireless': 'Dish',
            'AIRC-EV Connect': 'EV Connect', 'AIRC-Eve\'s Addiction': 'Eve\'s Addiction', 'AIRC-Experian': 'Experian',
            'AIRC-FC': 'FC', 'AIRC-FYF': 'FYF', 'AIRC-Glico': 'Glico', 'AIRC-Grab': 'Grab', 'AIRC-Greenlane': 'Greenlane',
            'AIRC-Hallmark': 'Hallmark', 'AIRC-IDIQ': 'IDIQ', 'AIRC-Kalahari': 'Kalahari', 'AIRC-Kyocera': 'Kyocera',
            'AIRC-M365': 'M365', 'AIRC-Maya': 'Maya', 'AIRC-Maya Hotline': 'Maya', 'AIRC-MDH': 'MDH',
            'AIRC-Meralco Back Office': 'Meralco', 'AIRC-Meralco Digital': 'Meralco', 'AIRC-Meralco Voice': 'Meralco',
            'AIRC-MKI': 'MKI', 'AIRC-PACSUN': 'PACSUN', 'AIRC-Palawan': 'Palawan',
            'AIRC-RCBC IB': 'RCBC', 'AIRC-RCBC Instaloan': 'RCBC', 'AIRC-RCBC OB': 'RCBC',
            'AIRC-SBI Remit': 'SBI Remit', 'AIRC-Sharkninja': 'Sharkninja', 'AIRC-Shopee': 'Shopee', 'AIRC-SLMC': 'SLMC',
            'AIRC-Teleflora': 'Teleflora', 'AIRC-Tenso': 'Tenso', 'AIRC-UNIQLO Non-voice': 'UNIQLO', 'AIRC-UNIQLO Universalist': 'UNIQLO',
            'AIRC-Viagogo': 'Viagogo', 'PAL-ATTENDANCE': 'PAL', 'PAL-VOICE': 'PAL', 'EPLDT': 'EPLDT', 'PLDT SOCIAL MEDIA': 'PLDT', 'PLDT-177 EMAIL CENTER': 'PLDT',
            'PLDT-177 SOCIAL MEDIA': 'PLDT', 'PLDT-BILLING AND ACCOUNTS': 'PLDT', 'PLDT-CCBO': 'PLDT', 'PLDT-CENTRAL FULFILLMENT': 'PLDT',
            'PLDT-CREDIT VALIDATION TEAM': 'PLDT', 'PLDT-CWT ENTERPRISE': 'PLDT', 'PLDT-CWT RESIDENTIAL': 'PLDT',
            'PLDT-ENTERPRISE BACK OF HOUSE': 'PLDT', 'PLDT-ENTERPRISE EMAIL': 'PLDT', 'PLDT-ENTERPRISE HOTLINE': 'PLDT',
            'PLDT-ENTERPRISE WEB TO LEAD': 'PLDT', 'PLDT-HOME CARE': 'PLDT', 'PLDT-HOME COLLECTION': 'PLDT', 'PLDT-HOME UHW': 'PLDT',
            'PLDT-PLDT TELESALES': 'PLDT', 'PLDT-POSTPAID FIELD SERVICE': 'PLDT', 'PLDT-PREPAID FIBER': 'PLDT', 'PLDT-RED FIBER': 'PLDT',
            'PLDT-REPAIR': 'PLDT', 'PLDT-RETENTION': 'PLDT', 'PNB': 'PNB', 'SMART-EBG CORPORATE EMAIL': 'SMART', 'SMART-EBG ENTERPRISE': 'SMART',
            'SMART-ENTERPRISE BACK OFFICE/HYPER ECARE': 'SMART', 'SMART-ENTERPRISE RETENTION': 'SMART', 'SMART-HYPERCARE': 'SMART',
            'SMART-INFINITY': 'SMART', 'SMART-L2 UNIVERSALIST': 'SMART', 'SMART-Onlinesales': 'SMART', 'SMART-POSTPAID': 'SMART', 'SMART-PREPAID': 'SMART',
            'SMART-SIM REGISTRATION': 'SMART', 'SMART-SOCIAL MEDIA': 'SMART', 'SMART-TELESALES': 'SMART', 'SMART-TRADE': 'SMART', 'VITRO': 'VITRO'
        };

        function getGroupKey(reportName) {
            return groupMap[reportName] || (reportName.startsWith('AIRC-') ? reportName.replace(/^AIRC-/, '').split(/\s/)[0] : reportName);
        }

        function getLogoUrl(name) {
            const source = logoMap[name];
            if (source) {
                if (source.startsWith('http')) return source;
                return `https://www.google.com/s2/favicons?domain=${source}&sz=128`;
            }
            return null;
        }

        function getFallbackLetter(name) {
            const match = name.match(/AIRC-([A-Z])|^([A-Z])/i);
            if (match) return (match[1] || match[2] || name[0]).toUpperCase();
            return name[0].toUpperCase();
        }

        function groupReportsByClient(reportsList) {
            const grouped = {};
            reportsList.forEach(r => {
                const key = getGroupKey(r.name);
                if (!grouped[key]) grouped[key] = [];
                grouped[key].push(r);
            });
            return Object.entries(grouped).sort((a, b) => {
                if (a[0] === 'General') return -1;
                if (b[0] === 'General') return 1;
                return a[0].localeCompare(b[0]);
            });
        }

        function renderLinkCard(r) {
            const url = r.external;
            const logoUrl = getLogoUrl(r.name);
            const fallback = getFallbackLetter(r.name);
            return `
                <a href="#" onclick="openReportModal('${url}', '${r.name.replace(/'/g, "\\'")}'); return false;" class="link-card" 
                   data-name="${r.name.toLowerCase()}" 
                   data-group="${(r.group || '').toLowerCase()}" 
                   data-sector="${(r.sector || '').toLowerCase()}">
                    <div class="icon-wrapper">
                        ${logoUrl
                    ? `<img src="${logoUrl}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                             <span class="fallback-icon" style="display:none">${fallback}</span>`
                    : `<span class="fallback-icon">${fallback}</span>`
                }
                    </div>
                    <div class="link-content">
                        <div class="title">${r.name}</div>
                        <span class="badge">External</span>
                    </div>
                    <div class="arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </a>
            `;
        }

        function renderCards(filteredReports) {
            const grid = document.getElementById('linksGrid');
            const reportCount = document.getElementById('reportCount');
            const groups = groupReportsByClient(filteredReports);
            const totalReports = filteredReports.length;

            if (reportCount) {
                reportCount.textContent = `Displaying: ${totalReports} report${totalReports !== 1 ? 's' : ''}`;
            }

            grid.innerHTML = groups.map(([groupName, groupReports]) => {
                const isExpanded = expandedGroups.has(groupName);
                const firstReport = groupReports[0];
                const logoUrl = getLogoUrl(firstReport.name);
                const fallback = getFallbackLetter(groupName);

                return `
                    <div class="group-card" data-group="${groupName}">
                        <div class="group-card-content">
                            <div class="icon-wrapper">
                                ${logoUrl
                        ? `<img src="${logoUrl}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                     <span class="fallback-icon" style="display:none">${fallback}</span>`
                        : `<span class="fallback-icon">${fallback}</span>`
                    }
                            </div>
                            <div class="group-name">${groupName}</div>
                            <div class="group-count">${groupReports.length} report${groupReports.length !== 1 ? 's' : ''}</div>
                        </div>
                    </div>
                `;
            }).join('');

            // Attach click handlers to open modal
            grid.querySelectorAll('.group-card').forEach(card => {
                card.addEventListener('click', () => {
                    const groupName = card.dataset.group;
                    const groupReports = groups.find(g => g[0] === groupName)[1];
                    openModal(groupName, groupReports);
                });
            });
        }

        // Modal Elements
        let modalOverlay, modalTitle, modalIcon, modalFallback, modalBody, modalClose;

        function initModal() {
            modalOverlay = document.getElementById('reportModal');
            modalTitle = document.getElementById('modalTitle');
            modalIcon = document.getElementById('modalIcon');
            modalFallback = document.getElementById('modalFallback');
            modalBody = document.getElementById('modalBody');
            modalClose = document.getElementById('modalClose');

            if (modalClose) {
                modalClose.addEventListener('click', closeModal);
            }

            if (modalOverlay) {
                modalOverlay.addEventListener('click', (e) => {
                    if (e.target === modalOverlay) closeModal();
                });
            }
        }

        function openModal(groupName, reports) {
            const firstReport = reports[0];
            const logoUrl = getLogoUrl(firstReport.name);
            const fallback = getFallbackLetter(groupName);

            // Set Title & Icon
            modalTitle.textContent = groupName;

            if (logoUrl) {
                modalIcon.src = logoUrl;
                modalIcon.style.display = 'block';
                modalFallback.style.display = 'none';
                modalIcon.onerror = () => {
                    modalIcon.style.display = 'none';
                    modalFallback.textContent = fallback;
                    modalFallback.style.display = 'flex';
                };
            } else {
                modalIcon.style.display = 'none';
                modalFallback.textContent = fallback;
                modalFallback.style.display = 'flex';
            }

            // Render Links
            modalBody.innerHTML = `
                <div class="modal-links-grid">
                    ${reports.map(renderLinkCard).join('')}
                </div>
            `;



            // Show Modal
            modalOverlay.classList.remove('hidden'); // Ensure it's not hidden if that class exists
            // Force reflow
            void modalOverlay.offsetWidth;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }



        function closeModal() {
            modalOverlay.classList.remove('active');
            setTimeout(() => {
                // modalOverlay.classList.add('hidden'); // Optional if you use display:none
                document.body.style.overflow = '';
            }, 300);
        }

        function getAllowedReports() {
            if (!currentUser) return [];

            // 1. Admin gets everything
            if (currentUser.role === 'admin') return reports;

            // 2. BDO Role Restriction
            if (currentUser.role === 'bdo') {
                return reports.filter(r => getGroupKey(r.name) === 'BDO');
            }

            // 3. Specific Access (Report Name, Client Group, or Sector)
            if (currentUser.access && currentUser.access !== 'ALL Access Report') {
                const accessItems = Array.isArray(currentUser.access)
                    ? currentUser.access.map(a => a.toLowerCase())
                    : [currentUser.access.toLowerCase()];

                return reports.filter(r => {
                    const reportNameLower = r.name.toLowerCase();
                    const groupKeyLower = getGroupKey(r.name).toLowerCase();
                    const enrichedGroupLower = (r.group || '').toLowerCase();
                    const sectorLower = (r.sector || '').toLowerCase();

                    return accessItems.some(accessValue =>
                        reportNameLower === accessValue ||
                        groupKeyLower === accessValue ||
                        enrichedGroupLower === accessValue ||
                        sectorLower === accessValue
                    );
                });
            }

            // Default fallback
            return reports;
        }

        function applyTabFilter(reportList) {
            return reportList.filter(r => {
                const isGeneral = ['General', 'Progress Report'].includes(getGroupKey(r.name));
                return currentTab === 'enterprise' ? isGeneral : !isGeneral;
            });
        }

        function filterReports(query) {
            let filtered = getAllowedReports();

            // Apply Tab Filtration
            filtered = applyTabFilter(filtered);

            // Text search filter (Name, Group, or Sector)
            const q = (query || '').trim().toLowerCase();
            if (q) {
                filtered = filtered.filter(r =>
                    r.name.toLowerCase().includes(q) ||
                    (r.group || '').toLowerCase().includes(q) ||
                    (r.sector || '').toLowerCase().includes(q)
                );
            }

            // Dropdown Filters
            if (selectedGroupFilter) {
                filtered = filtered.filter(r => r.group === selectedGroupFilter);
            }
            if (selectedSectorFilter) {
                filtered = filtered.filter(r => r.sector === selectedSectorFilter);
            }

            return filtered;
        }

        function updateUI() {
            const searchInput = document.getElementById('searchInput');
            const query = searchInput ? searchInput.value : '';

            const filtered = filterReports(query);
            renderCards(filtered);
            renderFilterButtons(); // Re-render dropdowns based on current state (coupled filtering)
        }

        function renderFilterButtons() {
            const groupFiltersContainer = document.getElementById('groupFilters');
            const sectorFiltersContainer = document.getElementById('sectorFilters');

            // 1. Get base allowed reports for this user
            let allowed = getAllowedReports();

            // Apply Tab Filtration
            allowed = applyTabFilter(allowed);

            // 2. Calculate available options for Group dropdown
            let groupOptionsReports = allowed;
            if (selectedSectorFilter) {
                groupOptionsReports = groupOptionsReports.filter(r => r.sector === selectedSectorFilter);
            }
            const groups = [...new Set(groupOptionsReports.map(r => r.group).filter(Boolean))].sort((a, b) => {
                if (a === 'General' || a === 'Progress Report') return -1;
                if (b === 'General' || b === 'Progress Report') return 1;
                return a.localeCompare(b);
            });

            // Auto-clear group filter if it's no longer valid for the selected sector
            if (selectedGroupFilter && !groups.includes(selectedGroupFilter)) {
                selectedGroupFilter = null;
            }

            // 3. Calculate available options for Sector dropdown
            let sectorOptionsReports = allowed;
            if (selectedGroupFilter) {
                sectorOptionsReports = sectorOptionsReports.filter(r => r.group === selectedGroupFilter);
            }
            const sectors = [...new Set(sectorOptionsReports.map(r => r.sector).filter(Boolean))].sort();

            // Auto-clear sector filter if it's no longer valid for the selected group
            if (selectedSectorFilter && !sectors.includes(selectedSectorFilter)) {
                selectedSectorFilter = null;
            }

            // 4. Render Group Dropdown
            groupFiltersContainer.innerHTML = `
                <select id="groupSelectInput" class="filter-dropdown">
                    ${groups.length === 1 ? '' : '<option value="">All Groups</option>'}
                    ${groups.map(group => `<option value="${group}" ${(selectedGroupFilter === group) || (groups.length === 1) ? 'selected' : ''}>${group}</option>`).join('')}
                </select>
            `;

            // 5. Render Sector Dropdown
            sectorFiltersContainer.innerHTML = `
                <select id="sectorSelectInput" class="filter-dropdown">
                    ${sectors.length === 1 ? '' : '<option value="">All Sectors</option>'}
                    ${sectors.map(sector => `<option value="${sector}" ${(selectedSectorFilter === sector) || (sectors.length === 1) ? 'selected' : ''}>${sector}</option>`).join('')}
                </select>
            `;

            // 6. Attach Event Listeners
            document.getElementById('groupSelectInput').addEventListener('change', (e) => {
                selectedGroupFilter = e.target.value;
                updateUI();
            });

            document.getElementById('sectorSelectInput').addEventListener('change', (e) => {
                selectedSectorFilter = e.target.value;
                updateUI();
            });
        }

        // Clear all filters button
        document.getElementById('clearFilters').addEventListener('click', () => {
            selectedGroupFilter = null;
            selectedSectorFilter = null;
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';

            updateUI();
        });

        document.getElementById('searchInput').addEventListener('input', (e) => {
            updateUI();
        });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentTab = e.target.dataset.tab;

                // Reset dropdown filters when switching tabs
                selectedGroupFilter = null;
                selectedSectorFilter = null;
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.value = '';

                updateUI();
            });
        });

        // Chat Bot Logic
        let chatFab, chatWindow, chatClose, chatMessages, chatInput, chatSend;

        function initChatBot() {
            chatFab = document.getElementById('chatFab');
            chatWindow = document.getElementById('chatWindow');
            chatClose = document.getElementById('chatClose');
            chatMessages = document.getElementById('chatMessages');
            chatInput = document.getElementById('chatInput');
            chatSend = document.getElementById('chatSend');

            if (chatFab) chatFab.addEventListener('click', toggleChat);
            if (chatClose) chatClose.addEventListener('click', toggleChat);
            if (chatSend) chatSend.addEventListener('click', handleSend);
            if (chatInput) {
                chatInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') handleSend();
                });
            }
        }

        function toggleChat() {
            if (!chatWindow) return;
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active')) {
                chatInput.focus();
            }
        }

        function addMessage(text, sender) {
            const div = document.createElement('div');
            div.className = `message ${sender}`;
            div.textContent = text;
            chatMessages.appendChild(div);
            // Scroll to bottom
            chatMessages.scrollTo(0, chatMessages.scrollHeight);
        }

        function generateBotResponse(query) {
            const q = query.toLowerCase();

            if (q.includes('hello') || q.includes('hi')) {
                return "Hello! How can I help you find reports today?";
            }

            if (q.includes('count') || q.includes('many')) {
                return `There are currently ${reports.length} reports available.`;
            }

            if (q.includes('sector')) {
                const sectors = [...new Set(reports.map(r => r.sector).filter(s => s))];
                return `We have reports in these sectors: ${sectors.join(', ')}.`;
            }

            if (q.includes('group')) {
                const groups = [...new Set(reports.map(r => r.group).filter(g => g))];
                return `Available groups: ${groups.slice(0, 10).join(', ')}... and more!`;
            }

            // Search for reports
            const matches = reports.filter(r =>
                r.name.toLowerCase().includes(q) ||
                (r.group && r.group.toLowerCase().includes(q)) ||
                (r.sector && r.sector.toLowerCase().includes(q))
            );

            if (matches.length > 0) {
                if (matches.length > 5) {
                    return `I found ${matches.length} reports matching that. Here are a few: ${matches.slice(0, 5).map(r => r.name).join(', ')}.`;
                }
                return `Here are the reports I found: ${matches.map(r => r.name).join(', ')}.`;
            }

            return "I didn't find any reports matching that. Try searching for a specific name, group, or sector.";
        }

        function handleSend() {
            const text = chatInput.value.trim();
            if (!text) return;

            addMessage(text, 'user');
            chatInput.value = '';

            // Simulate thinking delay
            setTimeout(() => {
                const response = generateBotResponse(text);
                addMessage(response, 'bot');
            }, 500);
        }

        // Report Viewer Logic
        function openReportModal(url, title) {
            const modal = document.getElementById('reportViewerModal');
            const iframe = document.getElementById('reportViewerFrame');
            const titleEl = document.getElementById('viewerModalTitle');

            if (modal && iframe) {
                if (titleEl) titleEl.textContent = title;
                iframe.src = url;
                modal.classList.add('visible');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeReportViewer() {
            const modal = document.getElementById('reportViewerModal');
            const iframe = document.getElementById('reportViewerFrame');

            if (modal && iframe) {
                modal.classList.remove('visible');
                document.body.style.overflow = '';
                // Clear src to stop video/audio or reset state
                setTimeout(() => {
                    iframe.src = 'about:blank';
                }, 300);
            }
        }

        // Lockscreen logic
        function initLockscreen() {
            const lockscreen = document.getElementById('lockscreen');
            const form = document.getElementById('lockscreenForm');
            const userInput = document.getElementById('lockUser');
            const passInput = document.getElementById('lockPass');
            const errorEl = document.getElementById('lockError');

            if (!lockscreen || !form || !userInput || !passInput || !errorEl) return;

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const enteredUsername = (userInput.value || '').trim().toLowerCase();
                const password = passInput.value || '';

                // Case-insensitive user lookup
                const matchedUsername = Object.keys(USERS).find(key => key.toLowerCase() === enteredUsername);
                const user = matchedUsername ? USERS[matchedUsername] : null;

                if (user && user.password === password) {
                    const username = matchedUsername; // Use the canonical casing from our users list
                    currentUser = { username, role: user.role, access: user.access, welcomeMessage: user.welcomeMessage, displayName: user.displayName };
                    errorEl.classList.remove('visible');

                    // Show success modal instead of unlocking immediately
                    showSuccessModal(currentUser);
                } else {
                    errorEl.classList.add('visible');
                    passInput.select();
                }
            });

            // Focus username on load
            setTimeout(() => userInput.focus(), 150);
        }

        // Global Navigation Event Bindings
        function initNavigation() {
            const goToDirectoryBtn = document.getElementById('goToDirectoryBtn');
            const homePage = document.getElementById('homePage');
            if (goToDirectoryBtn) {
                goToDirectoryBtn.addEventListener('click', () => {
                    if (homePage) homePage.style.display = 'none';
                    const directoryView = document.getElementById('directoryView');
                    if (directoryView) {
                        directoryView.style.display = 'block';
                        directoryView.style.animation = 'fadeIn 0.5s ease-out';
                    }
                    updateUI();
                });
            }

            const backToHomeBtn = document.getElementById('backToHomeBtn');
            if (backToHomeBtn) {
                backToHomeBtn.addEventListener('click', () => {
                    const directoryView = document.getElementById('directoryView');
                    if (directoryView) directoryView.style.display = 'none';
                    if (homePage) {
                        homePage.style.display = 'flex';
                        void homePage.offsetWidth; // Reflow hack
                    }
                });
            }
        }

        // Success Modal Logic
        function showSuccessModal(user) {
            const modal = document.getElementById('successModal');
            const msgEl = document.getElementById('welcomeMessageText');

            const greeting = getGreetingTimeBased(user.displayName || user.username);
            if (msgEl) msgEl.textContent = user.welcomeMessage || greeting;

            if (modal) {
                modal.style.display = 'flex';
                // Force reflow
                void modal.offsetWidth;
                modal.classList.add('active');
            }
        }

        function closeSuccessModal() {
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                    unlockApplication();
                }, 200);
            }
        }

        function unlockApplication() {
            sessionStorage.setItem('airc_currentUser', JSON.stringify(currentUser));
            
            const lockscreen = document.getElementById('lockscreen');
            // Unlock UI
            document.body.classList.remove('locked');
            if (lockscreen) {
                lockscreen.classList.add('hidden');
                // Also clear inline styles if any remaining from previous bug fixes
                lockscreen.style.display = '';
                lockscreen.style.opacity = '';
                lockscreen.style.pointerEvents = '';
            }

            // Show Homepage Logic
            const homePage = document.getElementById('homePage');
            const welcomeUser = document.getElementById('welcomeUser');
            const currentDate = document.getElementById('currentDate');
            const currentTime = document.getElementById('currentTime');
            const totalReportsCount = document.getElementById('totalReportsCount');
            const directoryView = document.getElementById('directoryView');

            if (window.location.hash === '#reports') {
                if (homePage) homePage.style.display = 'none';
                if (directoryView) {
                    directoryView.style.display = 'block';
                    directoryView.style.animation = 'fadeIn 0.5s ease-out';
                }
                updateUI();
                // Clear hash to prevent reloading loops later
                history.replaceState(null, null, ' ');
            } else {
                if (homePage) homePage.style.display = 'flex';
                if (directoryView) directoryView.style.display = 'none';
            }

            const greeting = currentUser ? getGreetingTimeBased(currentUser.displayName || currentUser.username) : '';

            // Update Homepage Greeting
            const homepageTitle = document.getElementById('homepageWelcomeTitle');
            if (homepageTitle && currentUser) homepageTitle.textContent = greeting;

            // Update Top Bar Greeting
            const topBarGreeting = document.getElementById('topBarGreeting');
            if (topBarGreeting && currentUser) topBarGreeting.textContent = greeting;

            // Update User Dropdown Info
            const dropdownName = document.getElementById('dropdownUserName');
            const dropdownRole = document.getElementById('dropdownUserRole');
            if (dropdownName && currentUser) dropdownName.textContent = currentUser.displayName || currentUser.username;
            if (dropdownRole && currentUser) dropdownRole.textContent = currentUser.role === 'admin' ? 'Administrator' : 'AIRC User';

            const dmBtn = document.getElementById('dataManagerBtn');
            if (dmBtn) {
                dmBtn.style.display = (currentUser && currentUser.role === 'admin') ? 'flex' : 'none';
            }

            // Load profile picture from local storage
            if (typeof loadProfilePic === 'function') loadProfilePic();

            if (currentDate) {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                currentDate.textContent = new Date().toLocaleDateString(undefined, options);
            }

            if (currentTime) {
                currentTime.textContent = new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
            }

            if (totalReportsCount) {
                totalReportsCount.textContent = getAllowedReports().length;
            }
        }

        // Global Key Listeners
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const successModal = document.getElementById('successModal');
                const logoutModal = document.getElementById('logoutModal');

                if (successModal && successModal.classList.contains('active')) {
                    closeSuccessModal();
                } else if (logoutModal && logoutModal.classList.contains('active')) {
                    confirmLogout();
                }
            }
        });


        // Initialize everything after DOM is ready
        window.addEventListener('DOMContentLoaded', () => {
            const storedUser = sessionStorage.getItem('airc_currentUser');
            if (storedUser) {
                currentUser = JSON.parse(storedUser);
                unlockApplication();
            } else {
                initLockscreen();
            }
            initNavigation(); // Safely bind navigation outside lockscreen logic
            initModal();
            initChatBot();

            // Ensure header logo uses the transparent PNG asset (UI-only change)
            const headerLogo = document.querySelector('.airc-logo');
            if (headerLogo) {
                headerLogo.src = 'https://i.imgur.com/qCMHE9S.png';
            }

            // Initialize Viewer Modal Close
            const viewerOverlay = document.getElementById('reportViewerModal');
            const viewerCloseBtn = document.getElementById('viewerModalClose');

            if (viewerOverlay && viewerCloseBtn) {
                viewerCloseBtn.addEventListener('click', closeReportViewer);
                viewerOverlay.addEventListener('click', (e) => {
                    if (e.target === viewerOverlay) closeReportViewer();
                });
            }
        });

        // Dark Mode Toggle
        function toggleDarkMode() {
            const body = document.body;
            const isDarkMode = body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        }

        // Initialize dark mode from localStorage
        function initDarkMode() {
            const darkMode = localStorage.getItem('darkMode');
            if (darkMode === 'enabled') {
                document.body.classList.add('dark-mode');
            }
        }

        // Initialize dark mode on page load
        initDarkMode();

        // Logout Logic
        function showLogoutModal() {
            const modal = document.getElementById('logoutModal');
            modal.style.display = 'flex';
            // Force reflow
            void modal.offsetWidth;
            modal.classList.add('active');
        }

        function closeLogoutModal() {
            const modal = document.getElementById('logoutModal');
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 200);
        }

        function confirmLogout() {
            sessionStorage.removeItem('airc_currentUser');
            closeLogoutModal();
            // Hide directory view
            document.getElementById('directoryView').style.display = 'none';

            // Reset password field
            document.getElementById('lockPass').value = '';
            document.getElementById('lockUser').value = '';

            // Re-show lockscreen overlay with animation
            document.body.classList.add('locked');
            const lock = document.getElementById('lockscreen');
            lock.classList.remove('hidden');
            lock.style.display = '';
            lock.style.opacity = '';
            lock.style.pointerEvents = '';

            // Reset home page if visible
            const homePage = document.getElementById('homePage');
            if (homePage) homePage.style.display = 'none';

            // Reset current user
            currentUser = null;
            const userBtnImg = document.getElementById('userBtnImg');
            if (userBtnImg) {
                userBtnImg.src = '';
                userBtnImg.style.display = 'none';
            }
        }

        function loadProfilePic() {
            if (!currentUser) return;
            const savedPic = localStorage.getItem('profilePic_' + currentUser.username);
            const userBtnImg = document.getElementById('userBtnImg');
            if (savedPic && userBtnImg) {
                userBtnImg.src = savedPic;
                userBtnImg.style.display = 'block';
            } else if (userBtnImg) {
                userBtnImg.src = '';
                userBtnImg.style.display = 'none';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const profileInput = document.getElementById('profilePicInput');
            if (profileInput) {
                profileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (!file || !currentUser) return;

                    const changeBtnSpan = document.querySelector('#changeProfilePicBtn span');
                    const originalText = changeBtnSpan ? changeBtnSpan.textContent : 'Change Picture';
                    if (changeBtnSpan) changeBtnSpan.textContent = 'Uploading...';

                    // Convert file to base64 for reliable Imgur uploading
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = async () => {
                        const base64Image = reader.result.split(',')[1];

                        const formData = new FormData();
                        formData.append('image', base64Image);
                        formData.append('type', 'base64');

                        try {
                            const response = await fetch('https://api.imgur.com/3/image', {
                                method: 'POST',
                                headers: {
                                    // Working Client ID
                                    Authorization: 'Client-ID 546c25a59c58ad7'
                                },
                                body: formData
                            });

                            const data = await response.json();
                            if (data.success && data.data && data.data.link) {
                                const imgUrl = data.data.link;
                                localStorage.setItem('profilePic_' + currentUser.username, imgUrl);
                                loadProfilePic();
                            } else {
                                console.error('Imgur API Error:', data);
                                alert('Failed to upload image to Imgur. Please try again.');
                            }
                        } catch (error) {
                            console.error('Error uploading image to Imgur:', error);
                            alert('Error uploading image. Check your internet connection or adblocker.');
                        } finally {
                            if (changeBtnSpan) changeBtnSpan.textContent = originalText;
                            profileInput.value = ''; // Reset input
                        }
                    };

                    reader.onerror = () => {
                        alert('Failed to read image file.');
                        if (changeBtnSpan) changeBtnSpan.textContent = originalText;
                        profileInput.value = '';
                    };
                });
            }
        });
        function handleDownload() {
            const frame = document.getElementById('reportViewerFrame');
            if (frame && frame.src && frame.src.includes('views/progress-viewer.html')) {
                // Send a message to the iframe to construct and download the custom Excel file
                frame.contentWindow.postMessage('download_excel', '*');
            } else {
                // Fallback to print-to-PDF for PBI reports
                window.print();
            }
        }

        // ==========================================
        // DYNAMIC DATA INJECTION
        // ==========================================
        window.addEventListener('load', async () => {
            // Load System Announcements
            const feedContainer = document.getElementById('announcementsFeed');
            if (feedContainer) {
                const news = window.APP_ANNOUNCEMENTS || [];
                
                if (news && news.length > 0) {
                    feedContainer.innerHTML = '';
                    news.forEach(item => {
                        const entry = document.createElement('div');
                        entry.innerHTML = `
                            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.25rem;">
                                <h4 style="color: var(--accent-primary); font-weight: 500; font-size: 1rem;">${item.title}</h4>
                                <span style="color: rgba(255,255,255,0.4); font-size: 0.75rem;">${item.date}</span>
                            </div>
                            <p style="color: rgba(255,255,255,0.7); font-size: 0.85rem; line-height: 1.4;">${item.message}</p>
                        `;
                        feedContainer.appendChild(entry);
                    });
                } else {
                    feedContainer.innerHTML = '<p style="color: rgba(255,255,255,0.5); font-size: 0.9rem;">No new announcements.</p>';
                }
            }

            // Load Chatbot Responses mapping
            window.CHATBOT_DATA = window.APP_CHATBOTRESPONSES || {};
            console.log("Chatbot training data loaded:", window.CHATBOT_DATA);
        });

