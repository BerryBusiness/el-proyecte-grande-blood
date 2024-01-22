--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4
-- restore the database from this dump file:
-- psql -U postgres -d imfblood -f packs_dump.sql

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: packs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.packs (
    id integer NOT NULL,
    elem character varying(255) NOT NULL,
    area character varying(255) NOT NULL,
    price integer NOT NULL,
    result integer NOT NULL
);


ALTER TABLE public.packs OWNER TO postgres;

--
-- Data for Name: packs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.packs (id, elem, area, price, result) FROM stdin;
1	Fructosamine	Institutional tests	1400	3
2	Glucose	Institutional tests	210	1
3	Hemoglobin A1c (HbA1c)	Institutional tests	3800	2
4	Alkaline Phosphatase	Institutional tests	210	1
5	Direct Bilirubin	Institutional tests	210	1
6	Gamma GT (GGT)	Institutional tests	210	1
7	AST (ASAT)	Institutional tests	210	1
8	ALT (ALAT)	Institutional tests	210	1
9	Lactate Dehydrogenase (LDH)	Institutional tests	210	1
10	Pseudo-cholinesterase	Institutional tests	650	3
11	Total Bilirubin	Institutional tests	210	1
12	Uric Acid	Institutional tests	210	1
13	Urea	Institutional tests	210	1
14	Creatinine	Institutional tests	350	1
15	Amylase	Institutional tests	500	1
16	Lipase	Institutional tests	650	1
17	Phosphate (P)	Institutional tests	210	1
18	Calcium (Ca)	Institutional tests	210	1
19	Potassium (K)	Institutional tests	210	1
20	Chloride (Cl)	Institutional tests	210	1
21	Magnesium (Mg)	Institutional tests	210	1
22	Sodium (Na)	Institutional tests	210	1
23	Albumin	Institutional tests	210	1
24	Alpha-1-Antitrypsin	Institutional tests	3600	10
25	C-reactive Protein (CRP)	Institutional tests	1300	1
26	Ultrasensitive C-reactive Protein (hsCRP)	Institutional tests	1300	1
27	Ceruloplasmin	Institutional tests	4000	5
28	Haptoglobin	Institutional tests	4000	5
29	Total Protein	Institutional tests	210	1
30	Ferritin	Institutional tests	2800	1
31	Soluble Transferrin Receptor	Institutional tests	5800	5
32	Transferrin	Institutional tests	750	1
33	Iron (Fe)	Institutional tests	210	1
34	HDL Cholesterol	Institutional tests	550	1
35	Cholesterol	Institutional tests	210	1
36	LDL Cholesterol	Institutional tests	700	1
37	Triglycerides	Institutional tests	210	1
38	Amino Acid Differentiation	Institutional tests	22000	5
39	Apolipoprotein A1	Institutional tests	5800	5
40	Apolipoprotein A2	Institutional tests	5800	15
41	Apolipoprotein B	Institutional tests	5800	5
42	Cystatin C	Institutional tests	5800	5
43	CK Isoenzymes	Institutional tests	9000	5
44	CK-MB Concentration	Institutional tests	2500	1
45	Bone-specific Alkaline Phosphatase (BAP)	Institutional tests	11000	5
46	Bile Acid	Institutional tests	7000	5
47	Erythropoietin	Institutional tests	11000	5
48	Phenylalanine	Institutional tests	7400	5
49	Homocysteine	Institutional tests	9000	5
50	Interleukin-6 (IL-6)	Institutional tests	11000	15
51	Creatine Kinase (CK)	Institutional tests	300	1
52	Lipid Protein Profile (LIPODENS)	Institutional tests	3400	15
53	Lipoprotein (a)	Institutional tests	6600	5
54	NT-ProBNP	Institutional tests	14000	5
55	Omega Fatty Acid Profile	Institutional tests	9000	15
56	Pancreas Specific Elastase (Serum)	Institutional tests	1100	7
57	Procalcitonin	Institutional tests	16000	2
58	SFLT1-PLGF Ratio	Institutional tests	34000	5
59	Serum Amyloid A (SAA)	Institutional tests	5800	5
60	Serum Osmolality	Institutional tests	1500	5
61	Troponin-I (hs-cTnI)	Institutional tests	5000	1
62	Cyclosporin A	Drug levels	6500	15
63	Digoxin	Drug levels	5000	5
64	Carbamazepine	Drug levels	7000	5
65	Lithium (Li)	Drug levels	1900	15
66	Dopamine	Drug levels	8000	7
67	Valproic Acid	Hematology	7000	5
68	Reticulocyte	Hematology	2000	1
69	Blood Count	Hematology	800	1
70	Red Blood Cell Sedimentation	Hemostasis	1200	1
71	Activated Partial Thromboplastin Time (APTT)	Hemostasis	1045	1
72	Antithrombin III	Hemostasis	6400	5
73	Anti-Xa (LMW-Heparin)	Hemostasis	9000	5
74	APC Resistance	Hemostasis	7000	10
75	D-dimer	Hemostasis	6400	1
76	Factor VIII	Hemostasis	10000	5
77	Factor XIII	Hemostasis	7000	5
78	Fibrinogen	Hemostasis	1500	1
79	Lupus Anticoagulant	Hemostasis	12500	5
80	Protein C Activity	Hemostasis	12500	5
81	Protein S Activity	Hemostasis	12500	5
82	Prothrombin (INR)	Hemostasis	700	1
83	Free Protein S Antigen	Hemostasis	19500	5
84	Thrombin Time	Hemostasis	850	1
85	von Willebrand Factor Antigen (vWF Ag)	Hemostasis	18000	14
86	von Willebrand Factor Antigen (vWF Ag)" (repeated, might be a different measurement or time)	Hemostasis	7000	14
87	von Willebrand Factor Multimer Analysis	Hemostasis	57000	14
88	17-OH Progesterone	Endokrinology	5000	10
89	5-HIAA (Urine)	Endokrinology	22000	5
90	ACTH	Endokrinology	5500	5
91	Adiponectin	Endokrinology	17000	15
92	Aldosterone	Endokrinology	11000	5
93	Androstenedione	Endokrinology	5500	5
94	Anti-Muellerian Hormone (AMH)	Endokrinology	10000	3
95	Anti-thyroglobulin (anti-TG)	Endokrinology	3300	2
96	Anti-TPO	Endokrinology	3300	2
97	Beta-crosslaps (Collagen Crosslinking)	Endokrinology	6500	5
98	C-peptide	Endokrinology	5500	5
99	CT-pro-ADH (Copeptin)	Endokrinology	11000	5
100	DHEA Sulfate (DHEAS)	Endokrinology	3800	2
101	Dihydrotestosterone	Endokrinology	22000	5
102	Follicle-Stimulating Hormone (FSH)	Endokrinology	3300	2
103	Gastrin	Endokrinology	11000	5
104	hCG (Human Chorionic Gonadotropin)	Endokrinology	3300	2
105	Histamine	Endokrinology	19000	7
106	Inhibin B	Endokrinology	17000	7
107	Insulin	Endokrinology	3400	2
108	Insulin-like Growth Factor (IGF-1)	Endokrinology	10000	5
109	Calcitonin	Endokrinology	5500	5
110	Cortisol (Saliva)	Endokrinology	12000	5
111	Cortisol (Serum)	Endokrinology	3300	2
112	Leptin	Endokrinology	11000	15
113	Luteinizing Hormone (LH)	Endokrinology	3300	2
114	Macroprolactin	Endokrinology	6000	5
115	Melatonin	Endokrinology	26000	15
116	Growth Hormone (hGH)	Endokrinology	5000	5
117	Osteocalcin	Endokrinology	5500	5
118	Estradiol (E2)	Endokrinology	3300	2
119	Parathyroid Hormone (PTH)	Endokrinology	5500	2
120	Progesterone	Endokrinology	3300	2
121	Prolactin	Endokrinology	3300	2
122	Renin	Endokrinology	11000	5
123	Reverse T3 (rT3)	Endokrinology	8000	15
124	Sex Hormone-Binding Globulin (SHBG)	Endokrinology	3300	2
125	Total Testosterone (Free and biologically active)	Endokrinology	6800	2
126	Free T3 (fT3)	Endokrinology	2800	2
127	Free T4 (fT4)	Endokrinology	2800	2
128	Serotonin	Endokrinology	22000	5
129	Thyroglobulin	Endokrinology	3800	2
130	Total Testosterone	Endokrinology	3300	2
131	Thyroid-Stimulating Hormone (TSH)	Tumor markers	2200	2
132	Alpha-Fetoprotein (AFP)	Tumor markers	2500	2
133	Beta-2-Microglobulin	Tumor markers	5800	5
134	CA 125	Tumor markers	5200	2
135	CA 15-3	Tumor markers	5200	2
136	CA 19-9	Tumor markers	5200	2
137	CA 50	Tumor markers	12000	5
138	CA 72-4	Tumor markers	6000	5
139	Carcinoembryonic Antigen (CEA)	Tumor markers	3800	2
140	Cyfra 21-1	Tumor markers	10000	5
141	HE4 + CA 125 with ROMA score calculation	Tumor markers	13000	3
142	Human Epididymis Protein 4 (HE4)	Tumor markers	6000	3
143	Chromogranin A	Tumor markers	17000	5
144	M2-PK (Plasma)	Tumor markers	17000	15
145	Neuron-Specific Enolase (NSE)	Tumor markers	8000	5
146	Prostate-Specific Antigen (PSA)	Tumor markers	3500	2
147	S100 Protein	Tumor markers	10000	10
148	Squamous Cell Carcinoma Antigen (SCC)	Tumor markers	10000	5
149	Free PSA (fPSA)	Tumor markers	4700	2
150	Tissue Polypeptide Antigen (TPA)	Infection Serology	10000	5
151	Anti-HBc IgM Antibody	Infection Serology	5000	5
152	Anti-HBs Antibody	Infection Serology	5000	5
153	Recent Hepatitis A Infection (HAV-IgM)	Infection Serology	4500	2
154	Hepatitis A Virus Antibodies (IgM+IgG)	Infection Serology	6000	5
155	Hepatitis B Virus Surface Antigen (HBsAg)	Infection Serology	4500	5
156	Hepatitis B Virus E Antigen (HBeAg)	Infection Serology	8500	5
157	Hepatitis C Virus Antibodies (IgG)	Infection Serology	6000	5
158	Borrelia Antibodies (IgG, IgM) + Western blot	Infection Serology	14000	15
159	Borrelia burgdorferi Antibodies (IgG, IgM)	Infection Serology	7000	8
160	Chlamydia pneumoniae Antibodies	Infection Serology	12000	6
161	Chlamydia trachomatis Antibodies	Infection Serology	10000	6
162	Cytomegalovirus (CMV) Antibodies (IgG, IgM)	Infection Serology	10000	5
163	Epstein-Barr Virus (EBV) Antibodies (IgM, VCA IgG, EBNA IgG)	Infection Serology	11000	5
164	Helicobacter pylori Antibody (IgG)	Infection Serology	5000	5
165	Herpes Simplex Virus (HSV) 1,2 Antibodies (IgG,IgM)	Infection Serology	12000	6
166	HIV-1,2 Antibodies, HIV 1 Antigen	Infection Serology	6500	5
167	Measles (Morbilli) Antibody (IgG)	Infection Serology	8000	15
168	Parvovirus B19 Antibody (IgG)	Infection Serology	8000	5
169	Parvovirus B19 Antibody (IgM)	Infection Serology	11000	5
170	RPR, TPHA (Syphilis Serology)	Infection Serology	4000	5
171	Rubella Immunity	Infection Serology	6000	6
172	Rubella Virus Antibodies (IgG, IgM)	Infection Serology	10000	6
173	SARS-CoV-2 IgG Antibody	Infection Serology	8000	2
174	SARS-CoV-2 Specific T-cell Immunity	Infection Serology	4000	6
175	Toxocara Antibody	Infection Serology	11000	15
176	Toxoplasma gondii Antibodies (IgG, IgM)	Infection Serology	8000	5
177	Toxoplasma gondii IgG Avidity	Infection Serology	7000	5
178	Treponema pallidum Confirmatory Antibody (IM)	Infection Serology	9000	10
179	Varicella-Zoster Virus Antibodies (IgG)	Infection Serology	7000	6
180	Varicella-Zoster Virus Antibodies (IgG, IgM)	Microbiology	10000	6
181	Group B Streptococcus Screening and Resistance Test	Microbiology	5000	4
182	Bacterial Culture and Resistance Test (Aerobic+Anaerobic)	Microbiology	10000	4
183	Bacterial Culture and Resistance Test (Aerobic+Anaerobic) (Aerobic+Fungus) either is possible	Microbiology	6000	4
184	MRSA Screening Test (Nose, Throat)	Microbiology	5000	4
185	Yeast Culture without Bacteriology	Microbiology	7000	1
186	Stool Fitness for Work Examination	Microbiology	8000	4
187	Stool Culture Bacteriological Examination (Salmonella, Shigella, Yersinia, Campylobacter, E. coli)	Microbiology	8000	4
188	Calicivirus/Norovirus Antigen Detection from Stool	Microbiology	12000	1
189	Clostridium difficile AG and Toxin Detection from Stool	Microbiology	9000	1
190	Microscopic Examination for Egg Parasites	Microbiology	9000	4
191	Helicobacter pylori Antigen Detection from Stool	Microbiology	5500	1
192	Smear Staining, Evaluation (Vaginal, Urethral)	Microbiology	2500	2
193	Nail Scraping Fungal Examination: Yeast and Mold Cultivation	Microbiology	15000	20
194	Legionella Antigen Detection from Urine Sample	Microbiology	9000	1
195	Neisseria gonorrhoeae Culture from Genital Secretion with Resistance	Microbiology	7000	6
196	Protozoan Detection from Stool (Giardia, Entamoeba, Cryptosporidium)	Microbiology	10000	1
197	Rotavirus/Adenovirus Antigen Detection from Stool	Microbiology	7000	1
198	Streptococcus pneumoniae Detection from Urine	Molecular microbiology	7000	1
199	Aptima mRNA HPV Screening	Molecular microbiology	10000	5
200	Aptima mRNA HPV Screening + Genotyping if necessary	Molecular microbiology	15000	5
201	Chlamydia trachomatis PCR	Molecular microbiology	6000	8
202	Gardnerella vaginalis/Atopobium vaginae PCR	Molecular microbiology	12000	6
203	Herpes simplex (HSV) PCR	Molecular microbiology	7000	6
204	HPV Quant-21 PCR (DNA-based detection of 21 genotypes with copy number determination)	Molecular microbiology	25000	6
205	Vaginal Microbiome Examination	Molecular microbiology	72000	26
206	Mycoplasma genitalium PCR	Molecular microbiology	6000	6
207	Mycoplasma hominis PCR	Molecular microbiology	12000	6
208	Neisseria gonorrhoeae PCR	Molecular microbiology	6000	6
209	SARS-CoV-2 PCR	Molecular microbiology	17000	2
210	STD Panel 2 (Treponema pallidum, HSV 1/2)	Molecular microbiology	10000	6
211	STD Panel 3 (Trichomonas, Gardnerella, Atopobium vaginae)	Molecular microbiology	12000	6
212	STD Panel 4 (Chlamydia trachom, Mycoplasma genit, Ureaplasma urealyt, Neisseria gonorr)	Molecular microbiology	16000	6
213	STD Panel 5 (Chlamydia trachomatis, Mycoplasma Molecular Microbiology)	Molecular microbiology	20000	6
214	PCR Examination of STD Genital Pathogens	Molecular microbiology	35000	6
215	Treponema pallidum PCR	Molecular microbiology	10000	6
216	Trichomonas vaginalis PCR	Molecular microbiology	6000	6
217	Ureaplasma Complex PCR	Fetal Risk Assessment	6000	6
218	Week 12 Screening with Risk Analysis (free beta-hCG, PAPP-A)	Immunology	14000	5
219	Acetylcholine Receptor Antibody	Immunology	10000	5
220	ANA (Antinuclear Antibody) ELISA	Immunology	7000	8
221	ANA (Antinuclear Antibody) Hep-2	Immunology	7000	8
222	ANA (Antinuclear Antibody) Profile IgG	Immunology	28000	7
223	ANCA (MPO and PR-3)	Immunology	12000	8
224	ANCA Profile (MPO, PR-3, Elastase, Lactoferrin, BPI, Cathepsin G)	Immunology	18000	10
225	Pernicious Anemia Panel	Immunology	22000	15
226	Annexin V IgG Autoantibody	Immunology	6500	8
227	Annexin V IgM Autoantibody	Immunology	6500	8
228	Anti C1q Antibody	Immunology	8000	8
229	Anti-CCP (Anti-Citrullinated Protein)	Immunology	5500	6
230	Anti-Phospholipid Antibodies (Cardiolipin and B2-GPI IgG, IgM)	Immunology	1500	8
231	Anti-MuSK Antibody	Immunology	10000	5
232	Anti-Streptolysin O (ASO)	Immunology	1800	1
233	Aquaporin-4 Antibody	Immunology	12000	5
234	ASCA IgA	Immunology	5500	8
235	ASCA IgG	Immunology	5500	8
236	Autoantibodies for Autoimmune Skin Diseases	Immunology	7000	6
237	Autoantibodies for Autoimmune Liver Disease	Immunology	15000	5
238	C1 Esterase Inhibitor Activity	Immunology	10000	5
239	C1 Esterase Inhibitor Concentration	Immunology	7000	5
240	C3 Complement Factor	Immunology	2200	4
241	C4 Complement Factor	Immunology	2200	4
242	Cellular Immune Status	Immunology	34000	8
243	Cellular Immune Status and NK Function	Immunology	60000	8
244	Celiac Screening (tTg IgA, tTg IgG)	Immunology	7500	8
245	Anti-dsDNA Antibody	Immunology	3900	8
246	ENA Panel (ELISA)	Immunology	13000	6
247	Anti-Endomysium Antibodies (EMA) IgA/IgG	Immunology	6400	6
248	Anti-Endothelial Antibody	Immunology	7000	5
249	Anti-Epidermal Basement Membrane Antibody	Immunology	12000	5
250	Anti-Phosphatidylinositol Antibody (IgG)	Immunology	19600	15
251	Anti-Phosphatidylinositol Antibody (IgM)	Immunology	19600	15
252	Phosphatidylserine IgG Autoantibody	Immunology	6400	8
253	Phosphatidylserine IgM Autoantibody	Immunology	6400	8
254	Anti-Glutamate Decarboxylase (GAD) Antibody	Immunology	10000	5
255	Anti-Striated Muscle Antibody	Immunology	7000	5
256	Anti-Histone Antibody	Immunology	7000	5
257	IA-2 Antibody (Anti-Tyrosine Phosphatase)	Immunology	10000	5
258	IgA	Immunology	2000	3
259	IgG	Immunology	2000	3
260	IgG Subclasses (IgG1, IgG2, IgG3, IgG4)	Immunology	22000	5
261	IgM	Immunology	2000	3
262	Immunofixation (Paraprotein Detection)	Immunology	15000	16
263	Anti-Intrinsic Factor Antibody	Immunology	10000	5
264	Anti-Insulin Antibody	Immunology	9200	8
265	Adrenal Cortex Antibody	Immunology	8000	5
266	NK Lymphocyte Function	Immunology	35000	6
267	Onconeural Antibodies	Immunology	22000	18
268	Pancreatic Islet Cell Antibody (ICA)	Immunology	7000	5
269	Antibody Against Ovarian Steroid-Producing Cells	Immunology	8000	5
270	Anti-Prothrombin Antibody	Immunology	6400	8
271	Rheumatoid Factor (RF)	Immunology	2400	1
272	Anti-Sperm Antibody	Immunology	10000	7
273	Serum Electrophoresis (ELFO)	Immunology	4200	6
274	Tissue-Specific Autoantibodies (Mitochondria, Smooth Muscle, Parietal Cell, LKM, and Reticulin)	Immunology	10000	6
275	TH1-TH2 Cytokine Dominance	Immunology	40000	6
276	TNF-alpha	Immunology	10000	7
277	Tryptase	Immunology	11000	15
278	TSH Receptor Antibody (TRAK)	Vitamins, Trace Elements	6400	5
279	1,25-Dihydroxy Vitamin D3	Vitamins, Trace Elements	16000	5
280	Vitamin A	Vitamins, Trace Elements	11000	5
281	Vitamin B1	Vitamins, Trace Elements	13000	5
282	Vitamin B12	Vitamins, Trace Elements	3700	2
283	Vitamin B2	Vitamins, Trace Elements	13000	5
284	Vitamin B3	Vitamins, Trace Elements	20000	5
285	Vitamin B5	Vitamins, Trace Elements	22000	7
286	Vitamin B6	Vitamins, Trace Elements	13000	5
287	Zinc (Zn)	Vitamins, Trace Elements	4200	5
288	Vitamin C	Vitamins, Trace Elements	22000	5
289	Vitamin D (25OH)	Vitamins, Trace Elements	4900	2
290	Vitamin E	Vitamins, Trace Elements	11000	5
291	Folic Acid	Vitamins, Trace Elements	3700	2
292	Vitamin H	Vitamins, Trace Elements	11000	7
293	Iodine	Vitamins, Trace Elements	20000	5
294	Vitamin K	Vitamins, Trace Elements	13000	15
295	Coenzyme Q10	Vitamins, Trace Elements	13000	5
296	Lead	Vitamins, Trace Elements	9000	5
297	Copper (Cu) from Serum	Vitamins, Trace Elements	4200	15
298	Selenium	Vitamins, Trace Elements	9000	5
299	Intestinal Microbiome Examination	Stool Examinations	60000	26
300	Bile Acid (Stool)	Stool Examinations	10000	15
301	Calprotectin	Stool Examinations	10000	5
302	M2-PK	Stool Examinations	17000	15
303	Pancreatic Elastase (Stool)	Stool Examinations	17000	5
304	Fecal Blood 1	Stool Examinations	2800	2
305	Zonulin (Stool)	Stool Examinations	17000	15
306	Total IgE	Allergies	4000	6
307	Allergy Panel, Insects - 4 Allergens	Allergies	9000	5
308	Inhalant Allergy Panel, Animals - 9 Allergens	Allergies	9000	5
309	Inhalant Allergy Panel, Mold and Dust - 9 Allergens	Allergies	9000	5
310	Inhalant Allergy Panel, Pollens - 19 Allergens	Allergies	17000	5
311	Nutritional Allergy Panel - 26 Allergens	Allergies	19000	5
312	Nutritional Allergy Panel, Meats - 9 Allergens	Allergies	9000	5
313	Inhalant Allergy Panel - Complete	Allergies	32000	5
314	Nutritional Allergy Panel - Complete	Allergies	25000	5
315	Mixed Allergy Panel - 20 Allergens	Allergies	22000	5
316	Complete Panel - 295 Allergens (Multiplex)	Allergies	86900	11
317	Complete Nutritional Panel - 287 Allergens (Fox Multiplex Food Intolerance)	Allergies	86900	7
318	Apple (rMal d1, rMal d3)	Allergies	11000	5
319	Wheat (rTri a14, Omega-5-gliadin, Alpha-, Beta-, Gamma-, Omega- Gliadin)	Allergies	17000	5
320	Walnut (rJug r1, rJug r3)	Allergies	11000	5
321	Peanut (rAra h1, rAra h2, rAra h3, rAra h8, rAra h9, rBet v1, nMux f3)	Allergies	40000	5
322	Hazelnut (rCor a14, rCor a1, rCor a8, rCor a9)	Allergies	22000	5
323	Peach (rPru p1, rPru p3, rPru p4)	Allergies	17000	5
324	Soybean (rGly m4, nGly m5, nGly m6)	Allergies	17000	5
325	Cow's Milk (Alpha-lactalbumin, Beta-lactoglobulin, Casein)	Allergies	17000	5
326	Egg White (Ovomucoid, Ovalbumin, Conalbumin)	Allergies	17000	5
327	Birch (PR-10-Protein, Profilin and Polcalcin, rBet v6)	Allergies	22000	5
328	Ragweed (Pectate Lyase)	Allergies	5800	5
329	Bromelain - CCD Marker nMUX F3	Allergies	5800	5
330	LTT for Metals (Only at designated blood collection points in Budapest!)	Allergies	77000	11
331	LTT for Titanium Alloys	Allergies	48000	11
332	Special Allergy LTT Test for Dental Metals, Ceramics, and Cement Intolerances	Intolerances	79000	12
333	Histamine Intolerance (DAO)	Intolerances	13000	7
334	Fox-Food Intolerance (IgG) Panel (108 Nutrients)	Intolerances	59000	6
335	Food Intolerance (IgG) Panel (220) - With Free Dietetic Consultation in Budapest	Intolerances	84900	11
336	Food Intolerance (IgG) Panel (46 Nutrients)	Intolerances	34000	5
337	Fox Multiplex Food Intolerance Test Complete Panel - 287 Foods	Intolerances	89900	11
338	Complete Urine (General and Sediment)	Urine examinations	1300	1
339	Kidney Stone Analysis	Urine examinations	12000	7
340	Urinary Amylase	Urine examinations	500	1
341	Urinary Protein	Urine examinations	210	2
342	Urinary Protein (from Collected Urine)	Urine examinations	210	2
343	Urinary Phosphate	Urine examinations	210	1
344	Urinary Phosphate (from Collected Urine)	Urine examinations	210	1
345	Urinary Glucose	Urine examinations	210	1
346	Urinary Glucose (from Collected Urine)	Urine examinations	210	1
347	Urinary Uric Acid	Urine examinations	210	1
348	Urinary Uric Acid (from Collected Urine)	Urine examinations	210	1
349	Urinary Calcium	Urine examinations	210	1
350	Urinary Calcium (from Collected Urine)	Urine examinations	210	1
351	Urinary Potassium	Urine examinations	210	1
352	Urinary Potassium (from Collected Urine)	Urine examinations	210	1
353	Urinary Urea	Urine examinations	210	1
354	Urinary Urea (from Collected Urine)	Urine examinations	210	1
355	Urinary Chloride	Urine examinations	210	1
356	Urinary Chloride (from Collected Urine)	Urine examinations	210	1
357	Urinary Creatinine	Urine examinations	300	1
358	Urinary Creatinine (from Collected Urine)	Urine examinations	300	1
359	Urinary Magnesium (from Collected Urine)	Urine examinations	200	1
360	Urinary Microalbumin	Urine examinations	1200	2
361	Urinary Microalbumin (from Collected Urine)	Urine examinations	1200	2
362	Urinary Sodium	Urine examinations	210	1
363	Urinary Sodium (from Collected Urine)	Urine examinations	210	1
364	BRCA Complete - Hereditary Breast and Ovarian Cancer	Molecular genetics	270000	31
365	BRCA Focus - Hereditary Breast and Ovarian Cancer Genetics	Molecular genetics	135000	31
366	CFTR Gene 36 Most Common (Hot-Spot) Mutations	Molecular genetics	100000	16
367	Celiac Genetics HLA-DQ2, HLA-DQ8	Molecular genetics	36000	13
368	HLA B27	Molecular genetics	30000	13
369	Factor V (FV) / Leiden Mutation	Molecular genetics	14000	11
370	Lactose Intolerance (LCT 13910 C/T)	Molecular genetics	14000	11
371	MTHFR A1298C Mutation	Molecular genetics	14000	11
372	MTHFR C677T Mutation	Molecular genetics	14000	11
373	Prothrombin Gene (FII) G20210 Mutation	Molecular genetics	14000	11
374	Thrombosis Mutation Panel 3-Component Panel	Molecular genetics	30000	11
375	Thrombosis Mutation Panel 4-Component Panel	Molecular genetics	40000	11
376	Wilson's Disease - H1069Q Mutation	Molecular genetics	36000	11
377	Y-Chromosome Microdeletion	Molecular genetics	90000	16
378	Blood Group and Antibody Screening	Blood type serology	14000	2
\.


--
-- Name: packs packs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.packs
    ADD CONSTRAINT packs_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

