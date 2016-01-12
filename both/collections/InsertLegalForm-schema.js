Legaldb = new Mongo.Collection("legaldb");
Legaldb.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Question",
    autoform:{
	    afFieldInput: {
        type: "textarea"
      }
    }
  },
  phone: {
	  type: String,
	  label: "Phone(Optional)",
	  optional: true,
	  max: 10
  },
  email: {
	  type: String,
	  label: "Email",
  },
  category: {
    type: String,
    label: "Area",
    autoform: {
      options: [
        {label: "Corporate", value: "corporate_law"},
        {label: "Civil", value: "civil_law"},
        {label: "Constitutional", value: "constitutional_law"},
        {label: "Criminal", value: "criminal_law"},
        {label: "Family", value: "fmlia_law"},
        {label: "Labour & Service", value: "lbrserv_law"},
        {label: "Legal Documents", value: "lgl_law"},
        {label: "Intellectual Property Rights", value: "ipr_law"},
        {label: "Taxation", value: "txn_law"},
        {label: "Students", value: "stdu_law"},
        {label: "Marriage", value: "mrg_law"},
        {label: "Domestic Violence", value: "dmstc_law"},
        {label: "Divorce", value: "dvrc_law"},
        {label: "Patent", value: "ptnt_law"},
        {label: "Copyright", value: "cpr_law"},
        {label: "Trademark", value: "tdm_law"},
        {label: "Cheque Bounce", value: "chq_law"},
        {label: "Cyber", value: "cyber_law"},
        {label: "Company", value: "cmpn_law"},
        {label: "Employment", value: "emp_law"},
        {label: "Consumer", value: "cons_law"},
        {label: "Human Rights", value: "hum_law"},
		{label: "Property", value: "prop_law"},
		{label: "Partnership/Contract", value: "part_law"},
		{label: "Elderly", value: "elderly_law"},
		{label: "Torts", value: "torts_law"},
		{label: "Social Justice", value: "social_law"},
		{label: "Motor Vehicle", value: "mtr_law"},
		{label: "Accident", value: "acc_law"},
		{label: "Banking", value: "bank_law"},
		{label: "Environmental", value: "env_law"},
		{label: "Insurance", value: "ins_law"},
		{label: "International", value: "int_law"},
		{label: "Notary", value: "notary_law"},
		{label: "Other", value: "other_law	"}
      ]
    }
  },
}));



