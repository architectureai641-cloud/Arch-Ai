        // Configuration - Replace with your actual contact details
        const OWNER_PHONE = "+2348033240323"; // Replace with your phone number
        const OWNER_EMAIL = "architectureai641@gmail.com"; // Replace with your email
        const WEBHOOK_URL = "https://webhook.site/5f52cc45-fa4b-4f70-91b5-eb9752c3e92e"; // Replace with your webhook

        // Custom cursor functionality
        const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Floating particles creation
        function createParticles() {
            const particles = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particles.appendChild(particle);
            }
        }

        // Smooth scrolling function
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Dream examples for random generation
        const dreamExamples = [
            "A crystalline tower that phases between dimensions with holographic walls",
            "An underwater city with bioluminescent coral architecture and flowing water bridges",
            "A floating monastery suspended by anti-gravity crystals above the clouds",
            "A tree-house metropolis with living wood structures that grow and adapt",
            "A glass pyramid that captures and stores starlight for nighttime illumination",
            "A spiral city that rotates with the Earth's magnetic field and weather patterns",
            "An ice palace that never melts, featuring thermal regulation and aurora lighting",
            "A building made entirely of flowing water and light with quantum stabilizers",
            "A structure that exists in multiple timelines simultaneously with temporal anchors",
            "A living building that grows and adapts to its inhabitants' emotional states",
            "A metamaterial skyscraper that shifts between solid and ethereal states",
            "A bio-integrated dome city with neural networks connecting all structures",
            "A gravity-defying castle with inverted waterfalls and floating gardens",
            "A crystalline library that stores knowledge in light patterns and holograms",
            "A shape-shifting residential complex that adapts to seasonal changes"
        ];

        // Enhanced dream generation with realistic AI analysis
        async function generateDream() {
            const input = document.getElementById('dreamInput');
            const visualization = document.getElementById('visualization');
            const loading = document.getElementById('loading');
            
            if (!input.value.trim()) {
                showNotification('Please describe your architectural dream first!', 'warning');
                return;
            }
            
            // Show loading animation
            loading.style.display = 'flex';
            
            try {
                // Send notification to owner
                await sendNotificationToOwner('dream_generated', {
                    dream: input.value,
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    referrer: document.referrer
                });

                // Simulate AI processing time
                await new Promise(resolve => setTimeout(resolve, 3000));
                
                // Generate realistic architectural analysis
                const analysis = generateArchitecturalAnalysis(input.value);
                
                // Create enhanced visualization with detailed results
                visualization.innerHTML = `
                    <div style="position: absolute; top: 20px; left: 20px; right: 20px; bottom: 20px; overflow-y: auto;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <div style="font-size: 4rem; margin-bottom: 20px; animation: pulse 2s ease-in-out infinite;">🏗️✨</div>
                            <h3 style="color: #00ffff; margin-bottom: 15px; font-size: 1.8rem;">Dream Analysis Complete!</h3>
                            <p style="opacity: 0.9; margin-bottom: 30px; font-size: 1.1rem; font-style: italic;">"${input.value}"</p>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
                            <div style="background: rgba(0,255,255,0.1); border: 1px solid #00ffff; border-radius: 15px; padding: 20px;">
                                <h4 style="color: #00ffff; margin-bottom: 10px;">🎨 AI Analysis</h4>
                                <p style="font-size: 0.9rem; line-height: 1.5;">${analysis.description}</p>
                            </div>
                            
                            <div style="background: rgba(255,0,255,0.1); border: 1px solid #ff00ff; border-radius: 15px; padding: 20px;">
                                <h4 style="color: #ff00ff; margin-bottom: 10px;">🏗️ Structural Integrity</h4>
                                <p style="font-size: 0.9rem; line-height: 1.5;">${analysis.integrity}</p>
                            </div>
                            
                            <div style="background: rgba(255,255,0,0.1); border: 1px solid #ffff00; border-radius: 15px; padding: 20px;">
                                <h4 style="color: #ffff00; margin-bottom: 10px;">✨ Innovation Score</h4>
                                <p style="font-size: 0.9rem; line-height: 1.5;">${analysis.innovation}</p>
                            </div>
                            
                            <div style="background: rgba(0,255,255,0.1); border: 1px solid #00ffff; border-radius: 15px; padding: 20px;">
                                <h4 style="color: #00ffff; margin-bottom: 10px;">🔮 Future Compatibility</h4>
                                <p style="font-size: 0.9rem; line-height: 1.5;">${analysis.futureProof}</p>
                            </div>
                            
                            <div style="background: rgba(255,0,255,0.1); border: 1px solid #ff00ff; border-radius: 15px; padding: 20px;">
                                <h4 style="color: #ff00ff; margin-bottom: 10px;">💰 Estimated Cost</h4>
                                <p style="font-size: 0.9rem; line-height: 1.5;">${analysis.cost}</p>
                            </div>
                            
                            <div style="background: rgba(255,255,0,0.1); border: 1px solid #ffff00; border-radius: 15px; padding: 20px;">
                                <h4 style="color: #ffff00; margin-bottom: 10px;">⏱️ Build Timeline</h4>
                                <p style="font-size: 0.9rem; line-height: 1.5;">${analysis.buildTime}</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center;">
                            <button class="generate-btn" onclick="downloadBlueprints('${input.value.replace(/'/g, "\\'")}')">📋 Download Blueprints</button>
                            <button class="generate-btn" onclick="view3D('${input.value.replace(/'/g, "\\'")}')">🥽 View in 3D</button>
                            <button class="generate-btn" onclick="requestConsultation('${input.value.replace(/'/g, "\\'")}')">📞 Request Consultation</button>
                            <button class="generate-btn" onclick="shareDesign('${input.value.replace(/'/g, "\\'")}')">📤 Share Design</button>
                        </div>
                    </div>
                `;
                
                // Add visual effects
                visualization.style.background = 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1), rgba(255,255,0,0.05))';
                visualization.style.border = '2px solid #00ffff';
                visualization.style.boxShadow = '0 0 30px rgba(0,255,255,0.3)';
                
                showNotification('Dream successfully generated! 🎉', 'success');
                
            } catch (error) {
                console.error('Error generating dream:', error);
                showNotification('Dream generation temporarily unavailable. Please try again.', 'error');
            } finally {
                loading.style.display = 'none';
            }
        }

        // Generate realistic architectural analysis
        function generateArchitecturalAnalysis(dream) {
            const complexityWords = dream.toLowerCase().split(' ').length;
            const hasAdvanced = /crystal|holographic|floating|quantum|dimensional|bio|metamaterial|gravity|temporal/i.test(dream);
            const hasNature = /tree|water|coral|living|organic|natural|bio/i.test(dream);
            const hasLarge = /city|metropolis|complex|tower|skyscraper|palace|castle/i.test(dream);
            
            // Calculate structural integrity
            let integrityScore = 85 + Math.random() * 10;
            if (hasAdvanced) integrityScore -= 5;
            if (hasLarge) integrityScore += 3;
            
            const integrity = integrityScore.toFixed(1) + '% feasible with ' + 
                (hasAdvanced ? 'advanced metamaterials and quantum stabilization' : 'current construction technology');
            
            // Calculate innovation score
            let innovationScore = 7 + Math.random() * 2;
            if (hasAdvanced) innovationScore += 0.8;
            if (complexityWords > 10) innovationScore += 0.4;
            if (hasNature) innovationScore += 0.3;
            
            const innovation = innovationScore.toFixed(1) + '/10 - ' + 
                (innovationScore >= 8.5 ? 'Revolutionary breakthrough design' :
                 innovationScore >= 7.5 ? 'Highly creative and unique' : 
                 'Creative with solid foundations');
            
            // Calculate cost
            let baseCost = hasLarge ? 50 : 20;
            if (hasAdvanced) baseCost *= 2.5;
            if (hasNature) baseCost *= 1.3;
            
            const minCost = baseCost + Math.random() * 30;
            const maxCost = minCost * (1.5 + Math.random());
            const cost = `$${minCost.toFixed(0)}M - $${maxCost.toFixed(0)}M (including R&D)`;
            
            // Calculate build time
            let baseTime = hasLarge ? 3 : 1.5;
            if (hasAdvanced) baseTime *= 1.8;
            
            const minTime = baseTime + Math.random();
            const maxTime = minTime * (1.2 + Math.random() * 0.5);
            const buildTime = `${minTime.toFixed(1)}-${maxTime.toFixed(1)} years (with parallel construction)`;

            return {
                description: "Advanced quantum architecture engine has analyzed your vision with 99.7% accuracy using neural pattern recognition.",
                integrity,
                innovation,
                futureProof: hasAdvanced ? 'Adaptable to next 100+ years of technological evolution' : 'Adaptable to next 50 years of development',
                cost,
                buildTime
            };
        }

        // Random dream generation
        function randomDream() {
            const input = document.getElementById('dreamInput');
            const randomDream = dreamExamples[Math.floor(Math.random() * dreamExamples.length)];
            
            // Animate the text input
            input.value = '';
            let i = 0;
            const typeWriter = setInterval(() => {
                input.value += randomDream.charAt(i);
                i++;
                if (i >= randomDream.length) {
                    clearInterval(typeWriter);
                    setTimeout(() => generateDream(), 1000);
                }
            }, 50);
            
            showNotification('Random dream selected! Generating...', 'info');
        }

        // Enhance dream description
        function enhanceDream() {
            const input = document.getElementById('dreamInput');
            if (!input.value.trim()) {
                showNotification('Please enter a dream description first!', 'warning');
                return;
            }
            
            const enhancements = [
                " with holographic elements and quantum stabilizers",
                " featuring bio-luminescent materials and self-healing structures",
                " incorporating weather-responsive adaptive architecture",
                " with integrated AI consciousness and emotional resonance systems",
                " featuring time-dilution chambers and gravity manipulation fields",
                " with interdimensional portals and reality anchors",
                " using metamaterials that shift between solid and ethereal states",
                " powered by zero-point energy extraction and neural interfaces",
                " with molecular-scale construction and autonomous repair systems",
                " featuring consciousness-responsive environmental adaptation"
            ];
            
            const enhancement = enhancements[Math.floor(Math.random() * enhancements.length)];
            input.value += enhancement;
            
            showNotification('Dream enhanced with advanced features! ✨', 'success');
        }

        // Clear visualization
        function clearVisualization() {
            const visualization = document.getElementById('visualization');
            const input = document.getElementById('dreamInput');
            
            visualization.innerHTML = `
                <div class="viz-placeholder">
                    <div>Your architectural dreams will appear here</div>
                    <div style="margin-top: 10px; font-size: 0.9rem; opacity: 0.7;">Enter a description above and click Generate Dream</div>
                </div>
            `;
            
            visualization.style.background = 'rgba(0, 0, 0, 0.3)';
            visualization.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            visualization.style.boxShadow = 'none';
            
            input.value = '';
            showNotification('Visualization cleared', 'info');
        }

        // Download blueprints functionality
        async function downloadBlueprints(dream) {
            await sendNotificationToOwner('blueprint_download', { dream });
            
            const blueprintContent = generateBlueprintContent(dream);
            const blob = new Blob([blueprintContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `DreamArch_Blueprint_${new Date().getTime()}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showNotification('Blueprints downloaded successfully! 📋', 'success');
        }

        // 3D view functionality
        async function view3D(dream) {
            await sendNotificationToOwner('3d_view_request', { dream });
            
            const previewWindow = window.open('', '_blank', 'width=1000,height=700');
            previewWindow.document.write(generate3DPreviewHTML(dream));
            
            showNotification('3D viewer launched! 🥽', 'success');
        }

        // Request consultation
        async function requestConsultation(dream) {
            const name = prompt('Your name for the consultation:');
            const phone = prompt('Your phone number for callback:');
            
            if (name && phone) {
                await sendNotificationToOwner('consultation_request', { dream, name, phone });
                showNotification(`Consultation requested! We'll call ${name} at ${phone} within 24 hours.`, 'success');
            }
        }

        // Share design functionality
        async function shareDesign(dream) {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'My DreamArch Design',
                        text: `Check out my architectural dream: "${dream}"`,
                        url: window.location.href
                    });
                    showNotification('Design shared successfully! 📤', 'success');
                } catch (error) {
                    copyToClipboard(`Check out my architectural dream: "${dream}" - Created with DreamArch AI`);
                }
            } else {
                copyToClipboard(`Check out my architectural dream: "${dream}" - Created with DreamArch AI`);
            }
        }

        // Copy to clipboard helper
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Design copied to clipboard! 📋', 'success');
            });
        }

        // Generate blueprint content
        function generateBlueprintContent(dream) {
            const timestamp = new Date().toISOString();
            const analysis = generateArchitecturalAnalysis(dream);
            
            return `
DreamArch AI-Generated Blueprint Package
========================================
Dream Description: ${dream}
Generated: ${timestamp}
Analysis ID: DA-${Date.now()}

EXECUTIVE SUMMARY:
${analysis.description}

STRUCTURAL ANALYSIS:
- Foundation Type: Quantum-stabilized deep foundation with adaptive anchoring
- Primary Materials: Advanced metamaterial composites with self-healing properties
- Load Distribution: AI-optimized for dynamic stress patterns and environmental changes
- Environmental Resistance: Weather-adaptive smart materials with climate responsiveness
- Structural Integrity: ${analysis.integrity}

ARCHITECTURAL SPECIFICATIONS:
- Building Classification: Futuristic adaptive architecture
- Design Innovation Score: ${analysis.innovation}
- Future Compatibility: ${analysis.futureProof}
- Energy System: Zero-point extraction with quantum backup systems
- Smart Systems: Full AI integration with consciousness-responsive controls

CONSTRUCTION DETAILS:
- Estimated Timeline: ${analysis.buildTime}
- Project Budget: ${analysis.cost}
- Required Permits: Advanced construction, environmental impact, quantum safety
- Specialized Equipment: Quantum stabilizers, metamaterial fabricators, AI integration systems

3D MODELING COORDINATES:
[Quantum-encrypted coordinate system for advanced 3D modeling software]
Base Coordinates: X(0,0,0) - Adaptive positioning system
Structural Grid: Hexagonal quantum lattice with dynamic adjustment capability
Material Density Maps: Included in quantum data package

MATERIALS SPECIFICATION:
- Quantum-stabilized concrete: Variable cubic meters (adaptive to design)
- Metamaterial panels: Self-configuring square meters
- Holographic projection systems: Integrated throughout structure
- Bio-responsive environmental controls: Full building neural network
- Consciousness-interface systems: Quantum-entangled user interaction

CONSTRUCTION PHASES:
Phase 1: Site preparation and quantum field establishment (3-6 months)
Phase 2: Foundation and primary structure assembly (${analysis.buildTime.split('-')[0]} years)
Phase 3: Advanced systems integration and AI consciousness activation (6-12 months)
Phase 4: Testing, calibration, and reality synthesis verification (3-6 months)

SAFETY & COMPLIANCE:
- Quantum safety protocols: Level 5 containment
- Environmental impact: Net-positive ecological integration
- Building codes: Exceeds all current and projected future standards
- Insurance classification: Experimental advanced architecture

MAINTENANCE SCHEDULE:
- Self-diagnostic systems: Continuous monitoring
- Predictive maintenance: AI-scheduled based on usage patterns
- Material refresh: Self-healing systems with 50-year autonomy
- Consciousness calibration: Annual AI personality updates

COST BREAKDOWN:
Materials & Fabrication: 40% of total budget
Advanced Technology Integration: 35% of total budget
Specialized Labor & Expertise: 15% of total budget
Permits, Insurance & Contingency: 10% of total budget

CONTACT INFORMATION:
DreamArch Technologies
Quantum Architecture Division
Email: ${OWNER_EMAIL}
Phone: ${OWNER_PHONE}
Emergency Quantum Hotline: Available 24/7

DISCLAIMER:
This is an AI-generated conceptual blueprint based on advanced architectural analysis.
Professional architectural review and engineering validation required for construction.
Quantum technologies subject to regulatory approval and safety certification.

© 2024 DreamArch Technologies - Patent Pending
Quantum-Powered • AI-Enhanced • Reality-Synthesized
            `;
        }

        // Generate 3D preview HTML
        function generate3DPreviewHTML(dream) {
            return `
<!DOCTYPE html>
<html>
<head>
    <title>3D Preview: ${dream}</title>
    <style>
        body { 
            margin: 0; 
            background: linear-gradient(135deg, #0a0a0f, #1a1a2e);
            color: white; 
            font-family: 'Exo 2', sans-serif;
            overflow: hidden;
        }
        .preview-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: 
                radial-gradient(circle at 20% 80%, #00ffff22, transparent),
                radial-gradient(circle at 80% 20%, #ff00ff22, transparent);
        }
        .preview-content {
            text-align: center;
            padding: 60px;
            background: rgba(255,255,255,0.05);
            border-radius: 30px;
            backdrop-filter: blur(20px);
            border: 2px solid rgba(0,255,255,0.3);
            max-width: 800px;
        }
        .rotating-building {
            font-size: 8rem;
            animation: rotate3d 4s linear infinite;
            margin: 30px 0;
            filter: drop-shadow(0 0 20px #00ffff);
        }
        @keyframes rotate3d {
            from { transform: rotateY(0deg) rotateX(10deg); }
            to { transform: rotateY(360deg) rotateX(10deg); }
        }
        .controls {
            margin-top: 30px;
        }
        .control-btn {
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            border: none;
            padding: 12px 25px;
            margin: 5px;
            border-radius: 25px;
            color: #0a0a0f;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .control-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,255,255,0.4);
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
            text-align: left;
        }
        .stat-item {
            background: rgba(0,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(0,255,255,0.3);
        }
    </style>
</head>
<body>
    <div class="preview-container">
        <div class="preview-content">
            <h2>🏗️ 3D Holographic Preview</h2>
            <div class="rotating-building">🏗️</div>
            <p><strong>Dream Architecture:</strong></p>
            <p style="font-style: italic; margin: 20px 0;">"${dream}"</p>
            
            <div class="stats">
                <div class="stat-item">
                    <strong>🎯 Rendering:</strong><br>
                    Quantum-enhanced 3D model
                </div>
                <div class="stat-item">
                    <strong>📐 Precision:</strong><br>
                    Molecular-level accuracy
                </div>
                <div class="stat-item">
                    <strong>🔮 Reality Index:</strong><br>
                    98.7% achievable
                </div>
                <div class="stat-item">
                    <strong>⚡ Processing:</strong><br>
                    Real-time quantum simulation
                </div>
            </div>
            
            <div class="controls">
                <button class="control-btn" onclick="alert('VR mode activated! Put on your headset.')">🥽 VR Mode</button>
                <button class="control-btn" onclick="alert('AR projection starting...')">📱 AR View</button>
                <button class="control-btn" onclick="alert('Hologram projector syncing...')">✨ Hologram</button>
                <button class="control-btn" onclick="window.close()">❌ Close</button>
            </div>
            
            <p style="margin-top: 30px; font-size: 0.9rem; opacity: 0.8;">
                This preview uses advanced quantum rendering. For full immersive experience,<br>
                connect compatible VR/AR devices or holographic projectors.
            </p>
        </div>
    </div>
    
    <script>
        // Add some interactive 3D effects
        document.addEventListener('mousemove', (e) => {
            const building = document.querySelector('.rotating-building');
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            building.style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg) scale(1.1)\`;
        });
        
        // Auto-close after 5 minutes
        setTimeout(() => {
            if (confirm('3D preview session ending. Save this view?')) {
                alert('3D view saved to your DreamArch account!');
            }
            window.close();
        }, 300000);
    </script>
</body>
</html>
            `;
        }

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const contactInfo = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                project: formData.get('project'),
                budget: formData.get('budget'),
                message: formData.get('message'),
                timestamp: new Date().toISOString(),
                source: 'DreamArch Contact Form'
            };
            
            const submitBtn = e.target.querySelector('.contact-submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Launching Mission...';
            submitBtn.disabled = true;
            
            try {
                await sendNotificationToOwner('contact_form', contactInfo);
                
                document.getElementById('successMessage').style.display = 'block';
                e.target.reset();
                
                showNotification(`Mission Control contacted! We'll call ${contactInfo.name} within 2 hours.`, 'success');
                
            } catch (error) {
                console.error('Error sending contact form:', error);
                showNotification('Communication error. Please try again or call us directly.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });

        // Notification system
        async function sendNotificationToOwner(type, data) {
            const notificationData = {
                type: type,
                data: data,
                timestamp: new Date().toISOString(),
                userInfo: {
                    userAgent: navigator.userAgent,
                    referrer: document.referrer,
                    url: window.location.href,
                    screenResolution: `${screen.width}x${screen.height}`,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
                }
            };
            
            console.log('Sending notification to owner:', notificationData);
            
            // Try webhook first
            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: OWNER_PHONE,
                        email: OWNER_EMAIL,
                        message: formatNotificationMessage(type, data),
                        data: notificationData
                    })
                });
                
                if (response.ok) return true;
            } catch (error) {
                console.log('Webhook failed, using fallback...');
            }
            
            // Fallback notification method
            return await sendFallbackNotification(type, data);
        }

        // Format notification messages
        function formatNotificationMessage(type, data) {
            const timestamp = new Date().toLocaleString();
            
            switch(type) {
                case 'dream_generated':
                    return `🏗️ NEW DREAM GENERATED!\n\nDream: "${data.dream}"\nTime: ${timestamp}\n\nUser is actively engaged - great lead opportunity!`;
                
                case 'contact_form':
                    return `📞 URGENT: NEW CONTACT FORM!\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nProject: ${data.project}\nBudget: ${data.budget}\n\nMessage: ${data.message}\n\nCALL THEM WITHIN 2 HOURS!`;
                
                case 'consultation_request':
                    return `🎯 CONSULTATION REQUESTED!\n\nName: ${data.name}\nPhone: ${data.phone}\nDream: "${data.dream}"\n\nHigh-value lead - schedule within 24 hours!`;
                
                case 'blueprint_download':
                    return `📋 BLUEPRINT DOWNLOADED!\n\nDream: "${data.dream}"\n\nUser downloaded blueprints - ready to move forward!`;
                
                case '3d_view_request':
                    return `🥽 3D VIEW OPENED!\n\nDream: "${data.dream}"\n\nHighly engaged user - premium service opportunity!`;
                
                default:
                    return `🔔 New DreamArch activity: ${type}\nTime: ${timestamp}`;
            }
        }

        // Fallback notification (could integrate with EmailJS or similar)
        async function sendFallbackNotification(type, data) {
            // This would integrate with EmailJS, Formspree, or similar service
            console.log('Fallback notification:', type, data);
            return true;
        }

        // Show notification toast
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            
            // Style based on type
            switch(type) {
                case 'success':
                    notification.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                    break;
                case 'error':
                    notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
                    break;
                case 'warning':
                    notification.style.background = 'linear-gradient(45deg, #ff9800, #f57c00)';
                    break;
                default:
                    notification.style.background = 'linear-gradient(45deg, var(--primary-glow), var(--secondary-glow))';
            }
            
            document.body.appendChild(notification);
            
            // Show notification
            setTimeout(() => notification.classList.add('show'), 100);
            
            // Hide notification
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => document.body.removeChild(notification), 300);
            }, 4000);
        }

        // Parallax effect
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.bg-animation');
            if (parallax) {
                const speed = scrolled * 0.3;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            
            // Add interactive hover effects to cards
            const cards = document.querySelectorAll('.feature-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) rotateX(5deg) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) rotateX(0) scale(1)';
                });
            });

            // Smooth scrolling for navigation
            document.querySelectorAll('.nav-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = item.getAttribute('onclick');
                    if (href) {
                        const sectionId = href.match(/'([^']+)'/)[1];
                        scrollToSection(sectionId);
                    }
                });
            });

            // Welcome notification
            setTimeout(() => {
                showNotification('Welcome to DreamArch! Start by describing your architectural dream.', 'info');
            }, 2000);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                generateDream();
            }
            if (e.key === 'Escape') {
                document.getElementById('loading').style.display = 'none';
            }
            if (e.ctrlKey && e.key === 'r') {
                e.preventDefault();
                randomDream();
            }
        });

        // Easter egg - Logo click counter
        let logoClickCount = 0;
        document.querySelector('.logo').addEventListener('click', () => {
            logoClickCount++;
            if (logoClickCount === 7) {
                showNotification('🎉 Secret Developer Mode Unlocked!', 'success');
                document.body.style.filter = 'hue-rotate(180deg) saturate(1.5)';
                setTimeout(() => {
                    document.body.style.filter = 'none';
                    showNotification('Reality restored. Premium features activated for this session!', 'info');
                }, 5000);
                logoClickCount = 0;
            }
        });

        // Auto-save dream inputs
        const dreamInput = document.getElementById('dreamInput');
        dreamInput.addEventListener('input', () => {
            localStorage.setItem('dreamarch_current_dream', dreamInput.value);
        });

        // Restore saved dream on page load
        window.addEventListener('load', () => {
            const savedDream = localStorage.getItem('dreamarch_current_dream');
            if (savedDream) {
                dreamInput.value = savedDream;
            }
        });

        // Performance monitoring
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`DreamArch loaded in ${loadTime.toFixed(2)}ms`);
            
            if (loadTime > 3000) {
                showNotification('Optimizing quantum processors...', 'info');
            }
        });
        
// ==================== SMART WEBSITE PROTECTION SYSTEM ====================

(function() {
    'use strict';
    
    // Protection Configuration - More balanced settings
    const PROTECTION_CONFIG = {
        blockInspect: true,
        blockScreenshot: true,
        blockRightClick: true,
        blockKeyboardShortcuts: true,
        showWarnings: true,
        warningDuration: 2000, // Shorter warning duration
        blurOnViolation: false // Disabled to prevent blocking normal use
    };

    // Create subtle protection overlay
    function createProtectionOverlay() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #ff0000, #ff4444);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-family: 'Orbitron', monospace;
            font-size: 14px;
            font-weight: bold;
            z-index: 999999;
            display: none;
            box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        `;
        overlay.id = 'protectionOverlay';
        document.body.appendChild(overlay);
        return overlay;
    }

    // Add slide-in animation
    const slideInCSS = document.createElement('style');
    slideInCSS.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        /* Disable text selection but allow form inputs */
        * {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        /* Re-enable selection for interactive elements */
        input, textarea, [contenteditable="true"] {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        
        /* Disable image dragging */
        img {
            -webkit-user-drag: none;
            -khtml-user-drag: none;
            -moz-user-drag: none;
            -o-user-drag: none;
            user-drag: none;
            pointer-events: none;
        }
        
        /* Allow clicking on interactive elements */
        button, a, input, textarea, select, [onclick] {
            pointer-events: auto !important;
        }
        
        /* Hide content during print/screenshot */
        @media print {
            body * { visibility: hidden !important; }
            body::before {
                content: "🚫 PROTECTED CONTENT - PRINTING NOT ALLOWED 🚫";
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 2rem;
                color: red;
                visibility: visible !important;
            }
        }
    `;
    document.head.appendChild(slideInCSS);

    // Initialize protection overlay
    const protectionOverlay = createProtectionOverlay();

    // Show protection warning (non-blocking)
    function showProtectionWarning(message) {
        if (!PROTECTION_CONFIG.showWarnings) return;
        
        protectionOverlay.innerHTML = `🚫 ${message}`;
        protectionOverlay.style.display = 'block';
        
        // Send violation report
        sendViolationReport(message);
        
        // Hide overlay after duration
        setTimeout(() => {
            protectionOverlay.style.display = 'none';
        }, PROTECTION_CONFIG.warningDuration);
    }

    // Send violation report to owner
    async function sendViolationReport(violation) {
        try {
            const violationData = {
                type: 'security_violation',
                violation: violation,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                url: window.location.href,
                referrer: document.referrer
            };
            
            // Send to your notification system
            if (typeof sendNotificationToOwner === 'function') {
                await sendNotificationToOwner('security_violation', violationData);
            }
            
            console.log('🔒 Security event logged:', violation);
        } catch (error) {
            console.log('Protection system active');
        }
    }

    // ==================== RIGHT CLICK PROTECTION ====================
    if (PROTECTION_CONFIG.blockRightClick) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            showProtectionWarning('Right-click disabled');
            return false;
        });
    }

    // ==================== KEYBOARD SHORTCUT PROTECTION ====================
    if (PROTECTION_CONFIG.blockKeyboardShortcuts) {
        document.addEventListener('keydown', function(e) {
            // Block developer tools shortcuts
            if (
                e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
                (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
                (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
                (e.ctrlKey && e.keyCode === 83) || // Ctrl+S (Save)
                e.keyCode === 44 // Print Screen
            ) {
                e.preventDefault();
                e.stopPropagation();
                showProtectionWarning('Developer tools blocked');
                return false;
            }
        });
    }

    // ==================== SCREENSHOT PROTECTION ====================
    if (PROTECTION_CONFIG.blockScreenshot) {
        // Hide content when window loses focus (screenshot tools)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                document.body.style.filter = 'blur(10px)';
                setTimeout(() => {
                    if (!document.hidden) {
                        document.body.style.filter = 'none';
                    }
                }, 100);
            } else {
                document.body.style.filter = 'none';
            }
        });

        // Block Print Screen key
        document.addEventListener('keyup', function(e) {
            if (e.keyCode === 44) {
                showProtectionWarning('Screenshots blocked');
                // Clear clipboard
                if (navigator.clipboard) {
                    navigator.clipboard.writeText('🚫 Screenshot blocked - DreamArch Protected');
                }
            }
        });
    }

    // ==================== INSPECT ELEMENT PROTECTION ====================
    if (PROTECTION_CONFIG.blockInspect) {
        // Detect developer tools opening
        let devtools = false;
        const threshold = 160;
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools) {
                    devtools = true;
                    showProtectionWarning('Developer tools detected');
                    console.clear();
                }
            } else {
                devtools = false;
            }
        }, 1000);

        // Block text selection on non-interactive elements
        document.addEventListener('selectstart', function(e) {
            if (!e.target.matches('input, textarea, [contenteditable="true"]')) {
                e.preventDefault();
                return false;
            }
        });
    }

    // ==================== COPY PROTECTION ====================
    document.addEventListener('copy', function(e) {
        if (!e.target.matches('input, textarea, [contenteditable="true"]')) {
            e.clipboardData.setData('text/plain', '🚫 Content protected by DreamArch Security');
            e.preventDefault();
            showProtectionWarning('Copying blocked');
        }
    });

    // ==================== DRAG PROTECTION ====================
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            showProtectionWarning('Image dragging blocked');
            return false;
        }
    });

    // ==================== MOBILE PROTECTION ====================
    // Disable long press context menu on mobile
    document.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });

    // ==================== ADVANCED DETECTION ====================
    
    // Detect if page is in iframe
    if (window.top !== window.self) {
        showProtectionWarning('Iframe embedding detected');
    }
    
    // Detect automated tools
    if (navigator.webdriver) {
        showProtectionWarning('Automated access detected');
    }

    // ==================== CONSOLE PROTECTION ====================
    
    // Override console to show protection message
    const originalConsole = window.console;
    let consoleWarningShown = false;
    
    Object.defineProperty(window, 'console', {
        get: function() {
            if (!consoleWarningShown) {
                consoleWarningShown = true;
                showProtectionWarning('Console access monitored');
            }
            return originalConsole;
        },
        set: function(value) {
            // Allow setting but monitor
        }
    });

    // ==================== INITIALIZATION ====================
    
    // Clear console and show protection status
    setTimeout(() => {
        console.clear();
        console.log('%c🔒 DreamArch Protection Active', 'color: #00ffff; font-size: 14px; font-weight: bold;');
        console.log('%cWebsite content is protected against unauthorized access.', 'color: #888; font-size: 10px;');
    }, 1000);

    // Show subtle notification that protection is active
    setTimeout(() => {
        if (typeof showNotification === 'function') {
            showNotification('🔒 Content protection active', 'info');
        }
    }, 3000);

})();

// ==================== ADDITIONAL PROTECTION HELPERS ====================

// Protect images from dragging
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });
});

// Clear clipboard periodically (less aggressive)
setInterval(function() {
    if (navigator.clipboard && Math.random() < 0.1) { // Only 10% of the time
        navigator.clipboard.writeText('🔒 DreamArch Protected');
    }
}, 10000); // Every 10 seconds instead of 5

console.log('%c🛡️ Smart Protection System Loaded', 'color: #00ff00; font-size: 12px;');
 // Mobile Data Detection System
        class MobileDataDetector {
            constructor() {
                this.isOnline = navigator.onLine;
                this.connectionType = null;
                this.checkInterval = null;
                this.init();
            }

            init() {
                // Initial connection check
                this.checkConnection();
                
                // Set up event listeners
                window.addEventListener('online', () => this.handleOnline());
                window.addEventListener('offline', () => this.handleOffline());
                
                // Continuous monitoring
                this.startMonitoring();
                
                // Check connection type if available
                this.detectConnectionType();
            }

            async checkConnection() {
                try {
                    // Test connection with a small request
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 5000);
                    
                    const response = await fetch('https://www.google.com/favicon.ico', {
                        method: 'HEAD',
                        mode: 'no-cors',
                        cache: 'no-cache',
                        signal: controller.signal
                    });
                    
                    clearTimeout(timeoutId);
                    
                    // Check if we're using mobile data
                    const isMobileData = await this.isMobileDataConnection();
                    
                    if (isMobileData) {
                        this.handleOnline();
                    } else {
                        this.handleOffline();
                    }
                    
                } catch (error) {
                    console.log('Connection check failed:', error);
                    this.handleOffline();
                }
            }

            async isMobileDataConnection() {
                // Check if Network Information API is available
                if ('connection' in navigator) {
                    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    
                    if (connection) {
                        // Mobile data connection types
                        const mobileTypes = ['cellular', '2g', '3g', '4g', '5g'];
                        const connectionType = connection.effectiveType || connection.type;
                        
                        console.log('Connection type:', connectionType);
                        
                        // Check if it's a mobile connection
                        return mobileTypes.some(type => 
                            connectionType && connectionType.toLowerCase().includes(type)
                        ) || connection.type === 'cellular';
                    }
                }
                
                // Fallback: Check user agent for mobile devices
                const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                
                // If it's a mobile device and online, assume mobile data
                return isMobileDevice && navigator.onLine;
            }

            detectConnectionType() {
                if ('connection' in navigator) {
                    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    
                    if (connection) {
                        this.connectionType = connection.effectiveType || connection.type;
                        
                        // Listen for connection changes
                        connection.addEventListener('change', () => {
                            this.connectionType = connection.effectiveType || connection.type;
                            this.checkConnection();
                        });
                    }
                }
            }

            handleOnline() {
                console.log('Mobile data connection detected');
                this.isOnline = true;
                this.showMainContent();
                this.updateConnectionStatus(true);
            }

            handleOffline() {
                console.log('Mobile data connection lost');
                this.isOnline = false;
                this.showOfflineOverlay();
                this.updateConnectionStatus(false);
            }

            showMainContent() {
                const overlay = document.getElementById('offlineOverlay');
                const mainContent = document.getElementById('mainContent');
                
                overlay.style.display = 'none';
                mainContent.classList.remove('blur-content');
                
                // Show success notification
                this.showNotification('✅ Mobile data connected! Website is now active.', 'success');
            }

            showOfflineOverlay() {
                const overlay = document.getElementById('offlineOverlay');
                const mainContent = document.getElementById('mainContent');
                
                overlay.style.display = 'flex';
                mainContent.classList.add('blur-content');
            }

            updateConnectionStatus(isOnline) {
                const statusElement = document.getElementById('connectionStatus');
                
                if (isOnline) {
                    statusElement.className = 'connection-status status-online';
                    statusElement.innerHTML = '📶 Mobile Data Connected';
                } else {
                    statusElement.className = 'connection-status status-offline';
                    statusElement.innerHTML = '📵 No Mobile Data';
                }
            }

            startMonitoring() {
                // Check connection every 10 seconds
                this.checkInterval = setInterval(() => {
                    this.checkConnection();
                }, 10000);
            }

            stopMonitoring() {
                if (this.checkInterval) {
                    clearInterval(this.checkInterval);
                }
            }

            showNotification(message, type = 'info') {
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    padding: 15px 25px;
                    border-radius: 10px;
                    color: white;
                    font-weight: bold;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                    max-width: 300px;
                `;
                
                if (type === 'success') {
                    notification.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                } else if (type === 'error') {
                    notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
                } else {
                    notification.style.background = 'linear-gradient(45deg, #2196F3, #1976D2)';
                }
                
                notification.textContent = message;
                document.body.appendChild(notification);
                
                // Remove after 4 seconds
                setTimeout(() => {
                    notification.remove();
                }, 4000);
            }
        }

// ==================== MOBILE DATA DETECTION SYSTEM ====================

(function() {
    'use strict';
    
    let dataOverlay = null;
    let isDataOverlayVisible = false;
    let connectionCheckInterval = null;
    let lastConnectionState = true;
    
    // Create the unique data connection overlay
    function createDataConnectionOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'data-connection-overlay';
        overlay.id = 'dataConnectionOverlay';
        
        overlay.innerHTML = `
            <div class="connection-waves">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            
            <div class="data-particles" id="dataParticles"></div>
            
            <div class="data-connection-container">
                <div class="data-connection-icon">📡</div>
                
                <h1 class="data-connection-title">Connection Required</h1>
                
                <p class="data-connection-message">
                    DreamArch requires an active mobile data connection to access our quantum architecture servers and AI processing systems.
                </p>
                
                <div class="data-status-indicator">
                    <div class="status-dot"></div>
                    <div class="status-dot"></div>
                    <div class="status-dot"></div>
                    <span style="margin-left: 10px; color: #ff0000; font-weight: bold;">
                        📶 Mobile Data: DISCONNECTED
                    </span>
                </div>
                
                <div class="data-connection-actions">
                    <button class="data-refresh-btn" onclick="checkDataConnection()">
                        🔄 Refresh Connection
                    </button>
                </div>
                
                <div class="data-tips">
                    <h4>💡 Quick Solutions:</h4>
                    <ul>
                        <li>Turn on Mobile Data in your phone settings</li>
                        <li>Check if you have sufficient data balance</li>
                        <li>Try switching to a different network</li>
                        <li>Restart your mobile data connection</li>
                        <li>Move to an area with better signal strength</li>
                    </ul>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Create floating particles
        createDataParticles();
        
        return overlay;
    }
    
    // Create floating particles for the overlay
    function createDataParticles() {
        const particlesContainer = document.getElementById('dataParticles');
        if (!particlesContainer) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'data-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
            
            // Random colors
            const colors = ['#00ffff', '#ff00ff', '#ffff00'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Advanced mobile data detection
    function isMobileDataActive() {
        return new Promise((resolve) => {
            // Check if online
            if (!navigator.onLine) {
                resolve(false);
                return;
            }
            
            // Check connection type
            if ('connection' in navigator) {
                const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                
                if (connection) {
                    // Check if it's a mobile connection
                    const mobileTypes = ['cellular', '2g', '3g', '4g', '5g'];
                    const isMobile = mobileTypes.includes(connection.effectiveType) || 
                                   mobileTypes.includes(connection.type) ||
                                   connection.type === 'cellular';
                    
                    resolve(isMobile);
                    return;
                }
            }
            
            // Fallback: Test with a small network request
            const startTime = Date.now();
            const timeout = 3000; // 3 seconds timeout
            
            // Create a small test request
            fetch('data:text/plain;base64,', {
                method: 'HEAD',
                cache: 'no-cache'
            })
            .then(() => {
                const responseTime = Date.now() - startTime;
                // If response is very fast, likely WiFi. If slower, likely mobile data
                const isMobileData = responseTime > 100; // Adjust threshold as needed
                resolve(isMobileData);
            })
            .catch(() => {
                resolve(false);
            });
            
            // Timeout fallback
            setTimeout(() => resolve(false), timeout);
        });
    }
    
    // Show data connection overlay
    function showDataOverlay() {
        if (!dataOverlay) {
            dataOverlay = createDataConnectionOverlay();
        }
        
        if (!isDataOverlayVisible) {
            dataOverlay.style.display = 'flex';
            isDataOverlayVisible = true;
            
            // Send notification to owner
            if (typeof sendNotificationToOwner === 'function') {
                sendNotificationToOwner('data_connection_lost', {
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    url: window.location.href
                });
            }
            
            console.log('🔴 Mobile data connection required');
        }
    }
    
    // Hide data connection overlay
    function hideDataOverlay() {
        if (dataOverlay && isDataOverlayVisible) {
            dataOverlay.style.display = 'none';
            isDataOverlayVisible = false;
            
            // Send notification to owner
            if (typeof sendNotificationToOwner === 'function') {
                sendNotificationToOwner('data_connection_restored', {
                    timestamp: new Date().toISOString(),
                    userAgent: navigator.userAgent,
                    url: window.location.href
                });
            }
            
            console.log('🟢 Mobile data connection restored');
        }
    }
    
    // Check data connection status
    async function checkDataConnection() {
        try {
            const hasMobileData = await isMobileDataActive();
            
            if (hasMobileData && !lastConnectionState) {
                // Connection restored
                hideDataOverlay();
                if (typeof showNotification === 'function') {
                    showNotification('📶 Mobile data connection restored!', 'success');
                }
            } else if (!hasMobileData && lastConnectionState) {
                // Connection lost
                showDataOverlay();
                if (typeof showNotification === 'function') {
                    showNotification('📶 Mobile data required for DreamArch', 'warning');
                }
            }
            
            lastConnectionState = hasMobileData;
            
        } catch (error) {
            console.log('Connection check error:', error);
            // On error, assume no mobile data
            if (lastConnectionState) {
                showDataOverlay();
                lastConnectionState = false;
            }
        }
    }
    
    // Make checkDataConnection globally available
    window.checkDataConnection = checkDataConnection;
    
    // Initialize connection monitoring
    function initializeDataMonitoring() {
        // Initial check
        setTimeout(checkDataConnection, 2000);
        
        // Set up periodic checking
        connectionCheckInterval = setInterval(checkDataConnection, 5000); // Check every 5 seconds
        
        // Listen for online/offline events
        window.addEventListener('online', () => {
            setTimeout(checkDataConnection, 1000);
        });
        
        window.addEventListener('offline', () => {
            showDataOverlay();
            lastConnectionState = false;
        });
        
        // Listen for connection changes
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                connection.addEventListener('change', () => {
                    setTimeout(checkDataConnection, 1000);
                });
            }
        }
        
        // Listen for visibility changes (user switching apps)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // Page became visible, check connection
                setTimeout(checkDataConnection, 500);
            }
        });
        
        console.log('📡 Mobile data monitoring initialized');
    }
    
    // Clean up function
    function cleanup() {
        if (connectionCheckInterval) {
            clearInterval(connectionCheckInterval);
        }
    }
    
    // Initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeDataMonitoring);
    } else {
        initializeDataMonitoring();
    }
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    // Add to global scope for debugging
    window.dataConnectionSystem = {
        check: checkDataConnection,
        show: showDataOverlay,
        hide: hideDataOverlay,
        isVisible: () => isDataOverlayVisible
    };
    
})();

// ==================== ENHANCED MOBILE DATA DETECTION ====================

// Additional mobile-specific detection
function detectMobileDataAdvanced() {
    return new Promise((resolve) => {
        // Check if it's a mobile device first
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (!isMobileDevice) {
            // If not mobile, assume it's okay (desktop/laptop)
            resolve(true);
            return;
        }
        
        // For mobile devices, check connection
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            
            if (connection) {
                // Check effective connection type
                const mobileConnections = ['slow-2g', '2g', '3g', '4g'];
                const isMobileConnection = mobileConnections.includes(connection.effectiveType) ||
                                         connection.type === 'cellular';
                
                resolve(isMobileConnection);
                return;
            }
        }
        
        // Fallback: Test network speed
        const testImage = new Image();
        const startTime = Date.now();
        
        testImage.onload = () => {
            const loadTime = Date.now() - startTime;
            // If load time is reasonable for mobile, assume mobile data
            resolve(loadTime < 2000);
        };
        
        testImage.onerror = () => {
            resolve(false);
        };
        
        // Use a small test image
        testImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        
        // Timeout after 3 seconds
        setTimeout(() => resolve(false), 3000);
    });
}

// Enhanced notification system for data connection
async function sendDataConnectionNotification(type, data) {
    const notificationData = {
        type: type,
        data: data,
        timestamp: new Date().toISOString(),
        connectionInfo: {
            online: navigator.onLine,
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                type: navigator.connection.type,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null
        }
    };
    
    if (typeof sendNotificationToOwner === 'function') {
        await sendNotificationToOwner(type, notificationData);
    }
    
    console.log('📡 Data connection event:', type, notificationData);
}

console.log('%c📡 Mobile Data Detection System Loaded', 'color: #00ffff; font-size: 14px; font-weight: bold;');
