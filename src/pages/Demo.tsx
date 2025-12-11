import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { BadgePill } from "@/components/ui/badge-pill";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Play,
  Code2,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp,
  Zap,
  BarChart3,
  ArrowUpRight,
  Layers,
  Settings,
  Eye,
  EyeOff,
  Database,
  Lock,
  Globe,
  FileCheck,
  Users,
  GitBranch,
  Terminal,
  Copy,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

// Real showcase scenarios based on actual EscrowGrid capabilities
const showcaseScenarios = [
  {
    id: "api-power",
    title: "API-Powered Escrow",
    description: "See how RESTful APIs create escrow positions in seconds with full policy control",
    icon: "⚡",
    category: "Technical",
    features: ["REST APIs", "JSON Responses", "Error Handling", "Rate Limiting"]
  },
  {
    id: "domain-model",
    title: "Domain Architecture",
    description: "Explore the 4-layer hierarchy that enables multi-tenant isolation and scalability",
    icon: "🏗️",
    category: "Architecture",
    features: ["Institution → Template → Asset → Position", "Data Isolation", "Compliance Boundaries"]
  },
  {
    id: "policy-engine",
    title: "Policy Engine Power",
    description: "Configure complex multi-party approval workflows and compliance rules dynamically",
    icon: "⚙️",
    category: "Configuration",
    features: ["Rule Engine", "Multi-party Approval", "Compliance Checks", "Dynamic Workflows"]
  },
  {
    id: "template-system",
    title: "Template Flexibility",
    description: "Pre-built templates for Construction, Trade Finance, and custom escrow scenarios",
    icon: "📋",
    category: "Templates",
    features: ["CONSTR_ESCROW", "TF_INVOICE", "TF_LC", "Custom Templates"]
  }
];

// Real API response examples
const apiExamples = {
  createPosition: {
    method: "POST",
    endpoint: "/api/v1/positions",
    request: {
      institutionId: "bank_001",
      templateId: "CONSTR_ESCROW",
      asset: {
        type: "construction_project",
        value: "2500000",
        currency: "USD",
        metadata: {
          projectName: "Downtown Tower",
          milestones: 6,
          retainageRate: "0.10"
        }
      },
      policy: {
        approvalRequired: true,
        complianceChecks: ["AML", "KYC", "Sanctions"],
        autoRelease: false
      }
    },
    response: {
      positionId: "pos_3fn8a2b9c1d0e7f5",
      status: "PENDING_SETUP",
      createdAt: "2025-01-10T15:30:00Z",
      estimatedCompletion: "2025-01-10T15:35:00Z"
    }
  },
  getDomainModel: {
    method: "GET",
    endpoint: "/api/v1/institutions/bank_001/domain",
    response: {
      institution: {
        id: "bank_001",
        name: "Global Bank Corp",
        complianceRegion: "US",
        settings: {
          multiTenant: true,
          dataIsolation: true,
          auditRetention: "7y"
        }
      },
      templates: [
        {
          id: "CONSTR_ESCROW",
          name: "Construction Escrow",
          type: "milestone_based",
          defaultRetainage: "10%",
          supportedCurrencies: ["USD", "EUR", "GBP"]
        },
        {
          id: "TF_INVOICE",
          name: "Trade Finance Invoice",
          type: "document_based",
          complianceFramework: "UCP 600",
          supportedDocuments: ["BillOfLading", "Invoice", "PackingList"]
        }
      ],
      assets: 47,
      positions: 156,
      totalValue: "45000000"
    }
  }
};

// Industry data for Live API Demo - Fixed syntax issue
const industries = [
  { id: "construction", name: "Construction", templates: ["CONSTR_ESCROW", "CONSTR_RETAINAGE"] },
  { id: "trade-finance", name: "Trade Finance", templates: ["TF_INVOICE", "TF_LC"] },
  { id: "merger-acquisition", name: "M&A", templates: ["MA_ESCROW"] }
];

// Get endpoints for specific industry
const getEndpointsForIndustry = (industry) => {
  switch(industry) {
    case "construction":
      return [
        {
          id: "create-construction-position",
          name: "Create Construction Escrow",
          method: "POST",
          path: "/api/v1/positions",
          description: "Create milestone-based construction escrow with retainage"
        },
        {
          id: "update-milestone",
          name: "Update Milestone Status",
          method: "PUT",
          path: "/api/v1/positions/:id/milestones/:milestoneId",
          description: "Mark construction milestones as complete"
        },
        {
          id: "release-retainage",
          name: "Release Retainage",
          method: "POST",
          path: "/api/v1/positions/:id/retainage/release",
          description: "Release retainage after final completion"
        }
      ];
    case "trade-finance":
      return [
        {
          id: "create-trade-finance-position",
          name: "Create Trade Finance Position",
          method: "POST",
          path: "/api/v1/positions",
          description: "Create document-based trade finance position"
        },
        {
          id: "upload-documents",
          name: "Upload Trade Documents",
          method: "POST",
          path: "/api/v1/positions/:id/documents",
          description: "Upload Bill of Lading, Invoice, Certificates"
        },
        {
          id: "verify-documents",
          name: "Document Verification",
          method: "POST",
          path: "/api/v1/positions/:id/verify-documents",
          description: "AI-powered document compliance verification"
        }
      ];
    case "merger-acquisition":
      return [
        {
          id: "create-ma-escrow",
          name: "Create M&A Escrow",
          method: "POST",
          path: "/api/v1/positions",
          description: "Create multi-party M&A escrow with conditions"
        },
        {
          id: "submit-approval",
          name: "Submit for Approval",
          method: "POST",
          path: "/api/v1/positions/:id/approvals",
          description: "Submit position for regulatory approval"
        },
        {
          id: "condition-check",
          name: "Check Conditions",
          method: "GET",
          path: "/api/v1/positions/:id/conditions",
          description: "Verify all escrow conditions are met"
        }
      ];
    default:
      return [];
  }
};

// Live API Demo Component
function LiveAPIDemo() {
  const [selectedIndustry, setSelectedIndustry] = useState("construction");
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  // Get endpoints for current industry
  const endpoints = getEndpointsForIndustry(selectedIndustry);
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]?.id || "");

  // Update selected endpoint when industry changes
  useEffect(() => {
    const newEndpoints = getEndpointsForIndustry(selectedIndustry);
    if (newEndpoints.length > 0 && (!selectedEndpoint || !newEndpoints.find(e => e.id === selectedEndpoint))) {
      setSelectedEndpoint(newEndpoints[0].id);
    }
  }, [selectedIndustry, selectedEndpoint]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate industry-specific mock response
    let mockResponse = {};

    if (selectedIndustry === "construction") {
      if (selectedEndpoint === "create-construction-position") {
        mockResponse = {
          positionId: `pos_${Math.random().toString(36).substr(2, 9)}`,
          status: "CREATED",
          institutionId: "inst_001",
          templateId: "CONSTR_ESCROW",
          asset: {
            type: "construction_project",
            value: formData.value || "2500000",
            currency: formData.currency || "USD",
            metadata: {
              projectName: formData.projectName || "Downtown Tower Development",
              milestones: formData.milestones || 6,
              retainageRate: formData.retainageRate || "0.10",
              totalContractValue: formData.value || "2500000"
            }
          },
          milestones: [
            { id: "ml_1", name: "Foundation Complete", percentage: 15, status: "PENDING" },
            { id: "ml_2", name: "Structure Framing", percentage: 30, status: "PENDING" },
            { id: "ml_3", name: "MEP Installation", percentage: 25, status: "PENDING" }
          ],
          retainageAccount: {
            totalRetainage: (formData.value || 2500000) * (formData.retainageRate || 0.10),
            released: 0,
            available: (formData.value || 2500000) * (formData.retainageRate || 0.10)
          },
          createdAt: new Date().toISOString(),
          estimatedCompletion: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000).toISOString()
        };
      } else if (selectedEndpoint === "update-milestone") {
        mockResponse = {
          milestoneId: formData.milestoneId || "ml_1",
          status: "COMPLETED",
          completionDate: new Date().toISOString(),
          inspectionReport: {
            approved: true,
            inspector: "AI-Inspector-001",
            notes: "Milestone completed according to specifications"
          },
          nextRelease: {
            amount: formData.releaseAmount || "375000",
            scheduledFor: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
          }
        };
      } else if (selectedEndpoint === "release-retainage") {
        mockResponse = {
          positionId: formData.positionId || "pos_example123",
          retainageReleased: formData.amount || "250000",
          status: "COMPLETED",
          transactionId: `txn_${Math.random().toString(36).substr(2, 9)}`,
          releasedTo: formData.payee || "Subcontractor Inc",
          releaseReason: formData.reason || "Final project completion",
          timestamp: new Date().toISOString()
        };
      }
    } else if (selectedIndustry === "trade-finance") {
      if (selectedEndpoint === "create-trade-finance-position") {
        mockResponse = {
          positionId: `pos_${Math.random().toString(36).substr(2, 9)}`,
          status: "CREATED",
          institutionId: "inst_001",
          templateId: "TF_INVOICE",
          asset: {
            type: "trade_finance_invoice",
            value: formData.value || "500000",
            currency: formData.currency || "USD",
            metadata: {
              invoiceNumber: formData.invoiceNumber || "INV-2024-001",
              exporter: formData.exporter || "Global Exports Ltd",
              importer: formData.importer || "International Imports Inc",
              shipmentRoute: formData.route || "Shanghai → Los Angeles",
              incoterms: formData.incoterms || "FOB"
            }
          },
          complianceStatus: "PENDING_DOCUMENTS",
          requiredDocuments: [
            "Bill of Lading",
            "Commercial Invoice",
            "Packing List",
            "Certificate of Origin"
          ],
          created: new Date().toISOString()
        };
      } else if (selectedEndpoint === "upload-documents") {
        mockResponse = {
          documents: [
            {
              type: "Bill of Lading",
              filename: "BL_12345.pdf",
              status: "UPLOADED",
              uploadedAt: new Date().toISOString(),
              size: "2.4 MB",
              hash: `hash_${Math.random().toString(36).substr(2, 16)}`
            },
            {
              type: "Commercial Invoice",
              filename: "INV_12345.pdf",
              status: "UPLOADED",
              uploadedAt: new Date().toISOString(),
              size: "1.1 MB",
              hash: `hash_${Math.random().toString(36).substr(2, 16)}`
            }
          ],
          verificationStatus: "PENDING_AI_REVIEW"
        };
      } else if (selectedEndpoint === "verify-documents") {
        mockResponse = {
          verificationResults: [
            {
              documentType: "Bill of Lading",
              status: "VERIFIED",
              confidence: 0.98,
              issues: [],
              extractedData: {
                vesselName: "MSC Container Ship",
                billOfLadingNumber: "MSCU123456789",
                portOfLoading: "Shanghai",
                portOfDischarge: "Los Angeles"
              }
            },
            {
              documentType: "Commercial Invoice",
              status: "VERIFIED",
              confidence: 0.95,
              issues: ["Missing signature on page 2"],
              extractedData: {
                invoiceNumber: "INV-2024-001",
                totalAmount: "500000 USD",
                dueDate: "2024-02-15"
              }
            }
          ],
          overallStatus: "APPROVED",
          recommendations: ["All documents verified successfully"]
        };
      }
    } else if (selectedIndustry === "merger-acquisition") {
      if (selectedEndpoint === "create-ma-escrow") {
        mockResponse = {
          positionId: `pos_${Math.random().toString(36).substr(2, 9)}`,
          status: "CREATED",
          institutionId: "inst_001",
          templateId: "MA_ESCROW",
          asset: {
            type: "ma_transaction",
            value: formData.value || "50000000",
            currency: formData.currency || "USD",
            metadata: {
              dealName: formData.dealName || "TechCorp Acquisition",
              targetCompany: formData.target || "Innovation Solutions Inc",
              acquirer: formData.acquirer || "TechCorp Holdings",
              dealType: formData.dealType || "100% Acquisition"
            }
          },
          escrowConditions: [
            { id: "cond_1", description: "Regulatory approval from FTC", status: "PENDING", required: true },
            { id: "cond_2", description: "Shareholder approval (75%+)", status: "PENDING", required: true },
            { id: "cond_3", description: "No material adverse change", status: "SATISFIED", required: true }
          ],
          parties: [
            { name: "TechCorp Holdings", role: "Acquirer", representative: "John Doe" },
            { name: "Innovation Solutions Inc", role: "Target", representative: "Jane Smith" },
            { name: "Neutral Escrow Agent", role: "Agent", representative: "EscrowGrid" }
          ]
        };
      } else if (selectedEndpoint === "submit-approval") {
        mockResponse = {
          submissionId: `sub_${Math.random().toString(36).substr(2, 9)}`,
          status: "SUBMITTED",
          submittedTo: formData.authority || "SEC",
          submissionType: formData.approvalType || "Merger Notification",
          expectedResponse: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          trackingNumber: `TRACK-${Math.floor(Math.random() * 1000000)}`
        };
      } else if (selectedEndpoint === "condition-check") {
        mockResponse = {
          positionId: formData.positionId || "pos_example123",
          overallStatus: "PARTIALLY_SATISFIED",
          conditions: [
            {
              id: "cond_1",
              description: "Regulatory approval from FTC",
              status: "SATISFIED",
              satisfiedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
              evidence: "FTC approval letter attached"
            },
            {
              id: "cond_2",
              description: "Shareholder approval (75%+)",
              status: "PENDING",
              currentProgress: "82%",
              required: "75%"
            },
            {
              id: "cond_3",
              description: "No material adverse change",
              status: "SATISFIED",
              satisfiedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
            }
          ],
          canProceed: false,
          blockingConditions: ["Shareholder approval"]
        };
      }
    }

    setApiResponse(mockResponse);
    setIsLoading(false);
  };

  const renderFormFields = () => {
    // Construction-specific forms
    if (selectedIndustry === "construction") {
      if (selectedEndpoint === "create-construction-position") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Contract Value *</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-sm"
                placeholder="2500000"
                value={formData.value || ""}
                onChange={(e) => setFormData({...formData, value: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency *</label>
              <select
                className="w-full p-2 border rounded text-sm"
                value={formData.currency || "USD"}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="Downtown Tower Development"
                value={formData.projectName || ""}
                onChange={(e) => setFormData({...formData, projectName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Total Milestones</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-sm"
                placeholder="6"
                value={formData.milestones || ""}
                onChange={(e) => setFormData({...formData, milestones: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Retainage Rate (%)</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="0.10"
                value={formData.retainageRate || ""}
                onChange={(e) => setFormData({...formData, retainageRate: e.target.value})}
              />
            </div>
          </div>
        );
      } else if (selectedEndpoint === "update-milestone") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Milestone ID *</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="ml_1"
                value={formData.milestoneId || ""}
                onChange={(e) => setFormData({...formData, milestoneId: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Release Amount</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-sm"
                placeholder="375000"
                value={formData.releaseAmount || ""}
                onChange={(e) => setFormData({...formData, releaseAmount: e.target.value})}
              />
            </div>
          </div>
        );
      } else if (selectedEndpoint === "release-retainage") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Position ID *</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="pos_example123"
                value={formData.positionId || ""}
                onChange={(e) => setFormData({...formData, positionId: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Release Amount</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-sm"
                placeholder="250000"
                value={formData.amount || ""}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Payee</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="Subcontractor Inc"
                value={formData.payee || ""}
                onChange={(e) => setFormData({...formData, payee: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Release Reason</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="Final project completion"
                value={formData.reason || ""}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
              />
            </div>
          </div>
        );
      }
    }
    // Trade Finance-specific forms
    else if (selectedIndustry === "trade-finance") {
      if (selectedEndpoint === "create-trade-finance-position") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Invoice Value *</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-sm"
                placeholder="500000"
                value={formData.value || ""}
                onChange={(e) => setFormData({...formData, value: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency *</label>
              <select
                className="w-full p-2 border rounded text-sm"
                value={formData.currency || "USD"}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Invoice Number</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="INV-2024-001"
                value={formData.invoiceNumber || ""}
                onChange={(e) => setFormData({...formData, invoiceNumber: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Exporter</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="Global Exports Ltd"
                value={formData.exporter || ""}
                onChange={(e) => setFormData({...formData, exporter: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Importer</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="International Imports Inc"
                value={formData.importer || ""}
                onChange={(e) => setFormData({...formData, importer: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Shipment Route</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="Shanghai → Los Angeles"
                value={formData.route || ""}
                onChange={(e) => setFormData({...formData, route: e.target.value})}
              />
            </div>
          </div>
        );
      } else if (selectedEndpoint === "verify-documents") {
        return (
          <div className="p-4 bg-secondary rounded">
            <p className="text-sm text-muted-foreground">This endpoint processes uploaded documents using AI verification. No additional parameters required.</p>
          </div>
        );
      }
    }
    // M&A-specific forms
    else if (selectedIndustry === "merger-acquisition") {
      if (selectedEndpoint === "create-ma-escrow") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Deal Value *</label>
              <input
                type="number"
                className="w-full p-2 border rounded text-sm"
                placeholder="50000000"
                value={formData.value || ""}
                onChange={(e) => setFormData({...formData, value: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Currency *</label>
              <select
                className="w-full p-2 border rounded text-sm"
                value={formData.currency || "USD"}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Deal Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="TechCorp Acquisition"
                value={formData.dealName || ""}
                onChange={(e) => setFormData({...formData, dealName: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Target Company</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="Innovation Solutions Inc"
                value={formData.target || ""}
                onChange={(e) => setFormData({...formData, target: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Acquirer</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="TechCorp Holdings"
                value={formData.acquirer || ""}
                onChange={(e) => setFormData({...formData, acquirer: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Deal Type</label>
              <select
                className="w-full p-2 border rounded text-sm"
                value={formData.dealType || "100% Acquisition"}
                onChange={(e) => setFormData({...formData, dealType: e.target.value})}
              >
                <option value="100% Acquisition">100% Acquisition</option>
                <option value="Majority Stake">Majority Stake</option>
                <option value="Asset Purchase">Asset Purchase</option>
              </select>
            </div>
          </div>
        );
      } else if (selectedEndpoint === "submit-approval") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Regulatory Authority</label>
              <select
                className="w-full p-2 border rounded text-sm"
                value={formData.authority || "SEC"}
                onChange={(e) => setFormData({...formData, authority: e.target.value})}
              >
                <option value="SEC">SEC (Securities and Exchange Commission)</option>
                <option value="FTC">FTC (Federal Trade Commission)</option>
                <option value="DOJ">DOJ (Department of Justice)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Approval Type</label>
              <select
                className="w-full p-2 border rounded text-sm"
                value={formData.approvalType || "Merger Notification"}
                onChange={(e) => setFormData({...formData, approvalType: e.target.value})}
              >
                <option value="Merger Notification">Merger Notification</option>
                <option value="Hart-Scott-Rodino">Hart-Scott-Rodino Filing</option>
                <option value="Antitrust Review">Antitrust Review</option>
              </select>
            </div>
          </div>
        );
      } else if (selectedEndpoint === "condition-check") {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Position ID *</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-sm"
                placeholder="pos_example123"
                value={formData.positionId || ""}
                onChange={(e) => setFormData({...formData, positionId: e.target.value})}
                required
              />
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Industry and Endpoint Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Select Industry</label>
          <select
            className="w-full p-3 border rounded text-sm"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            {industries.map(industry => (
              <option key={industry.id} value={industry.id}>
                {industry.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            Templates: {industries.find(i => i.id === selectedIndustry)?.templates.join(", ")}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select API Endpoint</label>
          <select
            className="w-full p-3 border rounded text-sm"
            value={selectedEndpoint}
            onChange={(e) => setSelectedEndpoint(e.target.value)}
          >
            {endpoints.map(endpoint => (
              <option key={endpoint.id} value={endpoint.id}>
                {endpoint.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            {endpoints.find(e => e.id === selectedEndpoint)?.description}
          </p>
        </div>
      </div>

      {/* API Info */}
      <div className="bg-secondary p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-foreground text-background px-2 py-1 rounded text-xs font-mono">
            {endpoints.find(e => e.id === selectedEndpoint)?.method}
          </span>
          <span className="font-mono text-sm">
            {endpoints.find(e => e.id === selectedEndpoint)?.path}
          </span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <h3 className="font-semibold mb-3">Request Parameters</h3>
          {renderFormFields()}
        </div>

        <Button type="submit" disabled={isLoading} className="bg-foreground hover:bg-secondary text-background border-2 border-dashed-monochrome">
          {isLoading ? "Processing..." : "Execute API Call"}
        </Button>
      </form>

      {/* Response */}
      {apiResponse && (
        <div>
          <h3 className="font-semibold mb-3">API Response</h3>
          <div className="bg-secondary border border-dotted-monochrome rounded-lg p-4">
            <pre className="text-xs overflow-x-auto">
              {JSON.stringify(apiResponse, null, 2)}
            </pre>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="mt-3"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2));
            }}
          >
            Copy Response
          </Button>
        </div>
      )}
    </div>
  );
}

export default function Architecture() {
  const [selectedScenario, setSelectedScenario] = useState(showcaseScenarios[0]);
  const [activeTab, setActiveTab] = useState("overview");
  const [showTemplateSample, setShowTemplateSample] = useState(false);

  // Set document title
  useEffect(() => {
    document.title = "Architecture - EscrowGrid";
  }, []);

  const handleScenarioSelect = (scenario) => {
    setSelectedScenario(scenario);
    setActiveTab("overview");
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-pattern">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <BadgePill className="mb-6 border-2 border-dashed-monochrome">
              <Zap className="w-3 h-3 mr-1" />
              Technical Showcase
            </BadgePill>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-shadow-retro">
              EscrowGrid in Action
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Experience the power of our Tokenization-as-a-Service platform.
              Explore real APIs, domain architecture, and policy engine capabilities
              that make EscrowGrid the preferred choice for financial institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <Link to="/developers">
                  <Code2 className="mr-2 h-4 w-4" />
                  View Full API Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Schedule Technical Deep-Dive
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <Alert className="max-w-2xl mx-auto">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                <strong>Technical Showcase:</strong> This demonstrates our platform's capabilities with realistic API response structures.
                Exact implementation details would be confirmed during technical consultation.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Technical Showcase Selection */}
      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Explore Core Capabilities
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select a technical capability to see how EscrowGrid delivers enterprise-grade escrow infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {showcaseScenarios.map((scenario) => (
              <Card
                key={scenario.id}
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 ${
                  selectedScenario.id === scenario.id
                    ? 'ring-2 ring-blue-600 bg-blue-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleScenarioSelect(scenario)}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{scenario.icon}</div>
                  <BadgePill variant="muted" className="text-xs mb-2">
                    {scenario.category}
                  </BadgePill>
                  <CardTitle className="text-lg">{scenario.title}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {scenario.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Interactive Technical Display */}
          {selectedScenario && (
            <div className="max-w-6xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="api">API Explorer</TabsTrigger>
                  <TabsTrigger value="architecture">Architecture</TabsTrigger>
                  <TabsTrigger value="live-demo">Live API Demo</TabsTrigger>
                  <TabsTrigger value="integration">Integration</TabsTrigger>
                </TabsList>

                {/* API Power Showcase */}
                {selectedScenario.id === "api-power" && (
                  <>
                    <TabsContent value="overview" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Terminal className="w-5 h-5 text-blue-600" />
                            RESTful API Architecture
                          </CardTitle>
                          <CardDescription>
                            Build escrow workflows with our comprehensive REST API designed for enterprise integration
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Core Endpoints</h4>
                              <div className="space-y-2 font-mono text-sm">
                                <div className="p-2 bg-gray-50 rounded">POST /api/v1/positions</div>
                                <div className="p-2 bg-gray-50 rounded">GET /api/v1/positions/:id</div>
                                <div className="p-2 bg-gray-50 rounded">PUT /api/v1/positions/:id/status</div>
                                <div className="p-2 bg-gray-50 rounded">POST /api/v1/approvals</div>
                                <div className="p-2 bg-gray-50 rounded">GET /api/v1/audit/:positionId</div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Enterprise Features</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  OAuth 2.0 Authentication
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Configurable rate limiting
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Webhook Support
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  API Versioning
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Comprehensive Error Codes
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Real Response Example</CardTitle>
                          <CardDescription>
                            Actual API response structure for creating a construction escrow position
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-sm font-semibold text-green-600">201 Created</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => copyToClipboard(JSON.stringify(apiExamples.createPosition.response, null, 2))}
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy JSON
                              </Button>
                            </div>
                            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs">
{JSON.stringify(apiExamples.createPosition.response, null, 2)}
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="api" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>API Reference</CardTitle>
                          <CardDescription>
                            Try our live API endpoints with real request/response handling
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-3">
                                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-mono">POST</span>
                                  <span className="font-mono text-sm">/api/v1/positions</span>
                                </div>

                              <div className="mb-4">
                                <h5 className="text-sm font-semibold mb-2">Request Body:</h5>
                                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{JSON.stringify(apiExamples.createPosition.request, null, 2)}
                                </pre>
                              </div>

                              <div className="border-t pt-4">
                                <h5 className="text-sm font-semibold mb-2">Response:</h5>
                                <div className="bg-green-50 border border-green-200 p-3 rounded">
                                  <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    <span className="text-green-600 font-semibold">Success</span>
                                  </div>
                                  <pre className="text-xs">{JSON.stringify(apiExamples.createPosition.response, null, 2)}</pre>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="architecture" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>API Architecture Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Lock className="w-8 h-8 text-blue-600" />
                              </div>
                              <h4 className="font-semibold">Security First</h4>
                              <p className="text-sm text-muted-foreground">OAuth 2.0, MFA, API Keys, Rate Limiting</p>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <GitBranch className="w-8 h-8 text-green-600" />
                              </div>
                              <h4 className="font-semibold">Version Control</h4>
                              <p className="text-sm text-muted-foreground">Semantic versioning, backward compatibility</p>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Database className="w-8 h-8 text-purple-600" />
                              </div>
                              <h4 className="font-semibold">Enterprise Ready</h4>
                              <p className="text-sm text-muted-foreground">Multi-tenant, audit logs, compliance</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="integration" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>API Integration Options</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">REST API Integration</h4>
                              <div className="space-y-3 text-sm">
                                <div className="p-3 bg-secondary rounded">
                                  <div className="font-mono text-xs mb-1">POST /api/v1/positions</div>
                                  <div className="text-muted-foreground">Create escrow positions</div>
                                </div>
                                <div className="p-3 bg-secondary rounded">
                                  <div className="font-mono text-xs mb-1">POST /api/v1/templates</div>
                                  <div className="text-muted-foreground">Configure custom templates</div>
                                </div>
                                <div className="p-3 bg-secondary rounded">
                                  <div className="font-mono text-xs mb-1">GET /api/v1/status/:id</div>
                                  <div className="text-muted-foreground">Track transaction status</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Integration Features</h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span>JSON-based API responses</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span>OAuth 2.0 authentication</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span>Real-time webhook notifications</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span>Comprehensive API documentation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  <span>Rate limiting and monitoring</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </>
                )}

                {/* Domain Model Showcase */}
                {selectedScenario.id === "domain-model" && (
                  <>
                    <TabsContent value="overview" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-purple-600" />
                            4-Layer Domain Architecture
                          </CardTitle>
                          <CardDescription>
                            Enterprise-grade multi-tenant isolation with clear data boundaries and compliance controls
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            {/* Architecture Visualization */}
                            <div className="relative">
                              <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                                  <div className="flex-1">
                                    <div className="font-semibold">Institution Layer</div>
                                    <div className="text-sm text-muted-foreground">
                                      Complete data isolation, compliance configuration, audit boundaries
                                    </div>
                                    <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded inline-block mt-1">
                                      Multi-tenant isolation
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <div className="w-3 h-3 bg-blue-600 rounded-full ml-2"></div>
                                  <div className="flex-1">
                                    <div className="font-semibold">Template Layer</div>
                                    <div className="text-sm text-muted-foreground">
                                      Pre-built escrow types (CONSTR_ESCROW, TF_INVOICE, TF_LC) with business logic
                                    </div>
                                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded inline-block mt-1">
                                      Configurable workflows
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <div className="w-3 h-3 bg-green-600 rounded-full ml-2"></div>
                                  <div className="flex-1">
                                    <div className="font-semibold">Asset Layer</div>
                                    <div className="text-sm text-muted-foreground">
                                      Real-world value representation (projects, invoices, contracts)
                                    </div>
                                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mt-1">
                                      Flexible asset types
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-4">
                                  <div className="w-3 h-3 bg-orange-600 rounded-full ml-2"></div>
                                  <div className="flex-1">
                                    <div className="font-semibold">Position Layer</div>
                                    <div className="text-sm text-muted-foreground">
                                      Individual escrow accounts with funds, state management, audit trails
                                    </div>
                                    <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block mt-1">
                                      Immutable tracking
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                              <div>
                                <h4 className="font-semibold mb-3">Enterprise Benefits</h4>
                                <ul className="space-y-2 text-sm">
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Complete data isolation between institutions
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Scalable multi-tenant architecture
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Configurable compliance per institution
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    Audit trails with regulatory compliance
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-3">Technical Advantages</h4>
                                <ul className="space-y-2 text-sm">
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                    Domain-driven design principles
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                    Immutable state management
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                    Event-driven architecture
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                    Horizontal scalability
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Live Domain Model API</CardTitle>
                          <CardDescription>
                            Query the actual domain structure to see hierarchical relationships
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-sm font-semibold text-green-600">GET /api/v1/institutions/bank_001/domain</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => copyToClipboard(JSON.stringify(apiExamples.getDomainModel.response, null, 2))}
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy JSON
                              </Button>
                            </div>
                            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs max-h-96">
{JSON.stringify(apiExamples.getDomainModel.response, null, 2)}
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="api" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Domain Model APIs</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-mono">GET</span>
                                <span className="font-mono text-sm">/institutions</span>
                              </div>
                              <p className="text-sm">List all institutions with metadata</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-mono">GET</span>
                                <span className="font-mono text-sm">/institutions/{'{id}'}/templates</span>
                              </div>
                              <p className="text-sm">Get available templates for institution</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-mono">GET</span>
                                <span className="font-mono text-sm">/assets/{'{id}'}/positions</span>
                              </div>
                              <p className="text-sm">Query positions for specific asset</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-mono">GET</span>
                                <span className="font-mono text-sm">/audit/{'{positionId}'}/trail</span>
                              </div>
                              <p className="text-sm">Complete audit trail for position</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="architecture" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Isolation & Security Architecture</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-3">Multi-Tenant Isolation</h4>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <Lock className="w-8 h-8 text-purple-600 mb-2" />
                                  <h5 className="font-semibold">Data Isolation</h5>
                                  <p className="text-sm text-muted-foreground">Separate databases per institution with encryption at rest</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <Shield className="w-8 h-8 text-purple-600 mb-2" />
                                  <h5 className="font-semibold">Compliance Boundaries</h5>
                                  <p className="text-sm text-muted-foreground">Regional compliance rules enforced at institution level</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <Globe className="w-8 h-8 text-purple-600 mb-2" />
                                  <h5 className="font-semibold">Audit Separation</h5>
                                  <p className="text-sm text-muted-foreground">Immutable audit logs separated per tenant</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3">Performance & Scalability</h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="p-4 bg-blue-50 rounded-lg">
                                  <div className="text-2xl font-bold text-blue-600">High</div>
                                  <div className="text-sm">Throughput</div>
                                </div>
                                <div className="p-4 bg-green-50 rounded-lg">
                                  <div className="text-2xl font-bold text-green-600">99.5%</div>
                                  <div className="text-sm">Uptime Target</div>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-lg">
                                  <div className="text-2xl font-bold text-purple-600">&lt;100ms</div>
                                  <div className="text-sm">API Response</div>
                                </div>
                                <div className="p-4 bg-orange-50 rounded-lg">
                                  <div className="text-2xl font-bold text-orange-600">Horizontal</div>
                                  <div className="text-sm">Scaling</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="integration" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Enterprise Integration Patterns</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border-l-4 border-blue-600 pl-4">
                              <h4 className="font-semibold">Database Isolation</h4>
                              <p className="text-sm text-muted-foreground">Each institution gets isolated database schema with encrypted connections</p>
                            </div>
                            <div className="border-l-4 border-green-600 pl-4">
                              <h4 className="font-semibold">Event Streaming</h4>
                              <p className="text-sm text-muted-foreground">Kafka-based event streaming for real-time updates across layers</p>
                            </div>
                            <div className="border-l-4 border-purple-600 pl-4">
                              <h4 className="font-semibold">Microservices Architecture</h4>
                              <p className="text-sm text-muted-foreground">Separate services for each domain layer with independent scaling</p>
                            </div>
                            <div className="border-l-4 border-orange-600 pl-4">
                              <h4 className="font-semibold">API Gateway</h4>
                              <p className="text-sm text-muted-foreground">Centralized API gateway with rate limiting and authentication</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </>
                )}

                {/* Policy Engine Showcase */}
                {selectedScenario.id === "policy-engine" && (
                  <>
                    <TabsContent value="overview" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Settings className="w-5 h-5 text-green-600" />
                            Dynamic Policy Engine
                          </CardTitle>
                          <CardDescription>
                            Configure complex business rules, approval workflows, and compliance policies without code changes
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-3">Policy Configuration Examples</h4>
                              <div className="space-y-4">
                                <div className="border rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-semibold text-green-600">Multi-Party Approval</h5>
                                    <BadgePill variant="muted">Active</BadgePill>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded text-sm">
                                    <pre className="font-mono">{`{
  "amountThresholds": [
    {"level": 1, "min": 0, "max": 100000, "approvers": ["manager"]},
    {"level": 2, "min": 100001, "max": 1000000, "approvers": ["manager", "director"]},
    {"level": 3, "min": 1000001, "max": null, "approvers": ["manager", "director", "compliance"]}
  ],
  "approvalType": "sequential",
  "timeoutHours": 72
}`}</pre>
                                  </div>
                                </div>

                                <div className="border rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-semibold text-blue-600">Compliance Rules</h5>
                                    <BadgePill variant="muted">Auto-Apply</BadgePill>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded text-sm">
                                    <pre className="font-mono">{`{
  "complianceChecks": {
    "mandatory": ["AML", "KYC", "Sanctions"],
    "conditional": {
      "amount > 1000000": ["EnhancedDueDiligence"],
      "international": ["FATCA", "CRS"]
    }
  },
  "autoRejectOnFailure": true,
  "escalationRules": {
    "highRisk": ["legal", "riskCommittee"]
  }
}`}</pre>
                                  </div>
                                </div>

                                <div className="border rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-semibold text-purple-600">Document Requirements</h5>
                                    <BadgePill variant="muted">Template-Based</BadgePill>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded text-sm">
                                    <pre className="font-mono">{`{
  "requiredDocuments": [
    {"type": "invoice", "validation": "amount|format|signature"},
    {"type": "billOfLading", "validation": "port|date|carrier"},
    {"type": "certificate", "conditional": "international"}
  ],
  "documentExtraction": {
    "enabled": true,
    "ocrConfidence": 0.95,
    "autoValidation": true
  }
}`}</pre>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mt-8">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                                <div className="text-sm text-muted-foreground">Pre-built Rule Templates</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">Real-time</div>
                                <div className="text-sm text-muted-foreground">Policy Evaluation</div>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">Drag & Drop</div>
                                <div className="text-sm text-muted-foreground">Policy Builder</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Engine Benefits</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Business Benefits</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  No code changes for business rules
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Real-time compliance updates
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Automated audit trail generation
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  Risk-based policy application
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Technical Features</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600" />
                                  Rule engine with 10ms evaluation
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600" />
                                  Template inheritance system
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600" />
                                  Version-controlled policies
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-blue-600" />
                                  Policy conflict detection
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="api" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Management APIs</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-mono">POST</span>
                                <span className="font-mono text-sm">/policies</span>
                              </div>
                              <p className="text-sm mb-3">Create new policy with rule definitions</p>
                              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  "name": "High-Value Transaction Approval",
  "templateId": "CONSTR_ESCROW",
  "rules": [...],
  "isActive": true
}`}
                              </pre>
                            </div>

                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-mono">PUT</span>
                                <span className="font-mono text-sm">/policies/{'{id}'}/evaluate</span>
                              </div>
                              <p className="text-sm mb-3">Real-time policy evaluation for transaction</p>
                              <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  "transaction": {...},
  "evaluation": {
    "approved": true,
    "rules": [...],
    "requiredActions": [...]
  }
}`}
                              </pre>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="architecture" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Engine Architecture</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="text-center">
                              <h4 className="font-semibold mb-4">Rule Evaluation Pipeline</h4>
                              <div className="flex items-center justify-center gap-2 mb-8">
                                <div className="px-3 py-2 bg-blue-100 rounded text-sm">Transaction</div>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                <div className="px-3 py-2 bg-green-100 rounded text-sm">Rule Engine</div>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                <div className="px-3 py-2 bg-purple-100 rounded text-sm">Decision</div>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                                <div className="px-3 py-2 bg-orange-100 rounded text-sm">Action</div>
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3">Core Components</h4>
                                <ul className="space-y-2 text-sm">
                                  <li>• Rule Definition Language</li>
                                  <li>• Decision Tree Engine</li>
                                  <li>• Conflict Resolution</li>
                                  <li>• Policy Versioning</li>
                                  <li>• Real-time Evaluation</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-3">Performance Metrics</h4>
                                <ul className="space-y-2 text-sm">
                                  <li>• &lt;10ms evaluation time</li>
                                  <li>• Concurrent policy evaluations</li>
                                  <li>• 99.99% accuracy</li>
                                  <li>• 24/7 monitoring</li>
                                  <li>• Auto-scaling capability</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="integration" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Policy Integration Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <h5 className="font-semibold mb-2">Compliance Integration</h5>
                              <p className="text-sm text-muted-foreground">Connect with AML/KYC providers for enhanced compliance</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h5 className="font-semibold mb-2">ERP Integration</h5>
                              <p className="text-sm text-muted-foreground">Integrate with financial systems for automated policy application</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h5 className="font-semibold mb-2">Custom Webhooks</h5>
                              <p className="text-sm text-muted-foreground">Trigger external systems based on policy decisions</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </>
                )}

                {/* Template System Showcase */}
                {selectedScenario.id === "template-system" && (
                  <>
                    <TabsContent value="overview" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <FileCheck className="w-5 h-5 text-orange-600" />
                            Template System
                          </CardTitle>
                          <CardDescription>
                            Pre-built escrow templates with configurable business logic for different industries
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                              <Card className="border-2 border-green-200">
                                <CardHeader className="text-center">
                                  <div className="text-4xl mb-2">🏗️</div>
                                  <CardTitle className="text-lg">Construction Escrow</CardTitle>
                                  <CardDescription>CONSTR_ESCROW Template</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-between">
                                      <span>Milestones:</span>
                                      <span className="font-semibold">3-10</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span>Retainage:</span>
                                      <span className="font-semibold">5-15%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span>Approval:</span>
                                      <span className="font-semibold">Multi-party</span>
                                    </div>
                                  </div>
                                  <div className="mt-4 space-y-1">
                                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                      ✓ Lien Protection
                                    </div>
                                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                      ✓ Pay When Paid
                                    </div>
                                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                      ✓ Change Orders
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card className="border-2 border-blue-200">
                                <CardHeader className="text-center">
                                  <div className="text-4xl mb-2">🚢</div>
                                  <CardTitle className="text-lg">Trade Finance</CardTitle>
                                  <CardDescription>TF_INVOICE Template</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-between">
                                      <span>Documents:</span>
                                      <span className="font-semibold">B/L, Invoice</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span>Compliance:</span>
                                      <span className="font-semibold">UCP 600</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span>Processing:</span>
                                      <span className="font-semibold">24-48h</span>
                                    </div>
                                  </div>
                                  <div className="mt-4 space-y-1">
                                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                      ✓ Document Verification
                                    </div>
                                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                      ✓ Incoterms Support
                                    </div>
                                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                      ✓ Multi-Currency
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card className="border-2 border-purple-200">
                                <CardHeader className="text-center">
                                  <div className="text-4xl mb-2">💼</div>
                                  <CardTitle className="text-lg">Letter of Credit</CardTitle>
                                  <CardDescription>TF_LC Template</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-between">
                                      <span>Type:</span>
                                      <span className="font-semibold">Irrevocable</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span>Banks:</span>
                                      <span className="font-semibold">SWIFT</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span>Countries:</span>
                                      <span className="font-semibold">180+</span>
                                    </div>
                                  </div>
                                  <div className="mt-4 space-y-1">
                                    <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                      ✓ Bank Integration
                                    </div>
                                    <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                      ✓ Auto Compliance
                                    </div>
                                    <div className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                                      ✓ Real-time Tracking
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-6">
                              <h4 className="font-semibold mb-4">Custom Template Builder</h4>
                              <div className="grid md:grid-cols-4 gap-4 text-center">
                                <div>
                                  <div className="text-2xl font-bold text-orange-600">50+</div>
                                  <div className="text-sm">Configurable Fields</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-blue-600">10+</div>
                                  <div className="text-sm">Workflow Steps</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-purple-600">5</div>
                                  <div className="text-sm">Approval Levels</div>
                                </div>
                                <div>
                                  <div className="text-2xl font-bold text-green-600">∞</div>
                                  <div className="text-sm">Scalable</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Template Configuration API</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-sm font-semibold text-green-600">POST /api/v1/templates</span>
                                <Button size="sm" variant="outline" onClick={() => setShowTemplateSample(!showTemplateSample)}>
                                  {showTemplateSample ? <EyeOff className="w-3 h-3 mr-1" /> : <Eye className="w-3 h-3 mr-1" />}
                                  {showTemplateSample ? "Hide Sample" : "View Sample"}
                                </Button>
                              </div>
                              {showTemplateSample && (
                                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{JSON.stringify({
  name: "Custom M&A Escrow",
  category: "merger_acquisition",
  milestones: [
    {
      name: "Due Diligence Completion",
      percentage: 20,
      requiredDocuments: ["DueDiligenceReport", "BoardApproval"]
    }
  ],
  approvalWorkflow: {
    stages: ["legal", "finance", "board"],
    requiredAllStages: true
  },
  compliance: {
    frameworks: ["SEC", "FINRA"],
    reportingFrequency: "weekly"
  }
}, null, 2)}
                                </pre>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="api" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Template Management APIs</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-mono">GET</span>
                                <span className="font-mono text-sm">/templates</span>
                              </div>
                              <p className="text-sm">List all available templates</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-mono">POST</span>
                                <span className="font-mono text-sm">/templates</span>
                              </div>
                              <p className="text-sm">Create custom template</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-mono">PUT</span>
                                <span className="font-mono text-sm">/templates/{'{id}'}</span>
                              </div>
                              <p className="text-sm">Update template configuration</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-mono">POST</span>
                                <span className="font-mono text-sm">/templates/{'{id}'}/clone</span>
                              </div>
                              <p className="text-sm">Clone template with modifications</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="architecture" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Template System Architecture</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <FileCheck className="w-8 h-8 text-orange-600" />
                                </div>
                                <h4 className="font-semibold">Template Engine</h4>
                                <p className="text-sm text-muted-foreground">Dynamic template generation with validation</p>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <GitBranch className="w-8 h-8 text-blue-600" />
                                </div>
                                <h4 className="font-semibold">Version Control</h4>
                                <p className="text-sm text-muted-foreground">Template versioning with rollback capability</p>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <Settings className="w-8 h-8 text-purple-600" />
                                </div>
                                <h4 className="font-semibold">Configuration UI</h4>
                                <p className="text-sm text-muted-foreground">No-code template builder interface</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="integration" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Template Integration Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="border-l-4 border-orange-600 pl-4">
                              <h4 className="font-semibold">Industry Templates</h4>
                              <p className="text-sm text-muted-foreground">Pre-built templates for construction, trade finance, M&A, real estate</p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-4">
                              <h4 className="font-semibold">Custom Development</h4>
                              <p className="text-sm text-muted-foreground">SDK for creating custom templates with business logic</p>
                            </div>
                            <div className="border-l-4 border-green-600 pl-4">
                              <h4 className="font-semibold">Template Marketplace</h4>
                              <p className="text-sm text-muted-foreground">Community-contributed templates for specific use cases</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </>
                )}

                {/* Live API Demo - Universal across all scenarios */}
                <TabsContent value="live-demo" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-foreground" />
                        Live API Demo
                      </CardTitle>
                      <CardDescription>
                        Test real EscrowGrid APIs with simulated responses based on your industry and use case
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <LiveAPIDemo />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-foreground border-y-2 border-dashed-monochrome">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-background mb-4 text-shadow-retro">
              Ready to Transform Your Escrow Operations?
            </h2>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Schedule a technical deep-dive with our architects. We'll demonstrate how EscrowGrid
              can replace months of development with immediate deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-background hover:bg-secondary text-foreground border-2 border-dotted-monochrome text-shadow-retro"
                asChild
              >
                <a
                  href="https://calendly.com/krishnagai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Schedule Technical Deep-Dive
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-dotted-monochrome text-foreground hover:bg-accent"
                asChild
              >
                <Link to="/developers">
                  <Code2 className="mr-2 h-4 w-4" />
                  Access API Documentation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}