'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Users, CheckCircle2, AlertCircle, TrendingUp, Award, Settings, HelpCircle, FileText, Lock, UserCircle, Edit3, ArrowRight, Menu, X } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

export default function Page() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Detect active section
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const evaluationCriteria = [
    { name: 'Creatividad e innovación', description: 'Propone ideas originales y soluciones creativas' },
    { name: 'Cumplimiento y puntualidad', description: 'Entrega tareas a tiempo' },
    { name: 'Calidad del trabajo', description: 'Mensajes claros, buena redacción y diseño' },
    { name: 'Compromiso institucional', description: 'Refleja valores cooperativos' },
    { name: 'Trabajo en equipo', description: 'Colabora activamente' },
    { name: 'Responsabilidad y proactividad', description: 'Autonomía e iniciativa' },
    { name: 'Impacto comunicacional', description: 'Contenidos con alcance' },
    { name: 'Adaptabilidad y actitud', description: 'Manejo de presión' },
    { name: 'Uso de canales digitales', description: 'Manejo de herramientas' },
    { name: 'Mejora continua', description: 'Busca capacitarse' }
  ]

  const scoreData = [
    { score: '1', meaning: 'Deficiente', color: '#ef4444' },
    { score: '2', meaning: 'Regular', color: '#f97316' },
    { score: '3', meaning: 'Bueno', color: '#eab308' },
    { score: '4', meaning: 'Muy Bueno', color: '#10b981' },
    { score: '5', meaning: 'Excelente', color: '#8b5cf6' }
  ]

  const employees = [
    { name: 'Brand Activator 1', selfEval: 42, peerEval: 45, final: 43.8, rank: 2 },
    { name: 'Brand Activator 2', selfEval: 38, peerEval: 41, final: 40.2, rank: 4 },
    { name: 'Organizador de Eventos', selfEval: 46, peerEval: 48, final: 47.2, rank: 1 },
    { name: 'Diseñador', selfEval: 40, peerEval: 43, final: 41.8, rank: 3 },
    { name: 'Empleado 5', selfEval: 35, peerEval: 38, final: 36.8, rank: 5 }
  ]

  const weightingData = [
    { name: 'Evaluación de Compañeros', value: 60, color: '#8b5cf6' },
    { name: 'Autoevaluación', value: 40, color: '#06b6d4' }
  ]

  const classificationData = [
    { range: '45-50', label: 'Empleado del Mes', count: 1, color: '#8b5cf6' },
    { range: '40-44', label: 'Excelente', count: 2, color: '#22c55e' },
    { range: '35-39', label: 'Muy Bueno', count: 1, color: '#eab308' },
    { range: '<35', label: 'En Mejora', count: 1, color: '#f97316' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 right-4 z-40">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-card shadow-lg cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>

        {isMenuOpen && (
          <Card className="absolute right-0 mt-2 w-72 shadow-xl animate-in fade-in slide-in-from-top-2">
            <CardHeader>
              <CardTitle className="text-lg">Contenido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { id: 'resumen', label: 'Resumen Ejecutivo', icon: FileText },
                { id: 'sistema', label: 'Visión del Sistema', icon: Settings },
                { id: 'acceso', label: 'Acceso al Sistema', icon: UserCircle },
                { id: 'credenciales', label: 'Gestión de Credenciales', icon: Lock },
                { id: 'personalizacion', label: 'Personalización', icon: Edit3 },
                { id: 'guia', label: 'Guía de Uso', icon: Users },
                { id: 'problemas', label: 'Solución de Problemas', icon: HelpCircle }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  className="w-full justify-start text-left"
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </CardContent>
          </Card>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Departamento de Comunicaciones - ACODJAR de R.L.
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Guía de Usuario
            <span className="block text-primary mt-2">Sistema de Evaluación</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty">
            Una guía completa y accionable para entender y utilizar el sistema de evaluación de desempeño del equipo de comunicaciones
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('resumen')} className="text-lg">
              Comenzar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('acceso')}>
              ¿Cómo accedo?
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="resumen" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Resumen Ejecutivo
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lo Esencial del Sistema
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Todo lo que necesitas saber en un vistazo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>5 Empleados</CardTitle>
                  <CardDescription>
                    Sistema diseñado para el equipo completo de comunicaciones
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>10 Criterios</CardTitle>
                  <CardDescription>
                    Evaluación integral con escala de puntuación 1-5
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-chart-2" />
                  </div>
                  <CardTitle>Cálculo 60/40</CardTitle>
                  <CardDescription>
                    Promedio ponderado automático de evaluaciones
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Mensajes Clave
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>Sin credenciales necesarias:</strong> El sistema es de acceso abierto para máxima simplicidad</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>Proceso completo:</strong> Cada empleado completa 1 autoevaluación + 4 evaluaciones de compañeros</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>Resultados automáticos:</strong> El sistema calcula rankings y selecciona el Empleado del Mes</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>Personalización disponible:</strong> Los nombres pueden actualizarse mediante nueva generación del sitio</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section id="sistema" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Características del Sistema
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Visión General del Sistema
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                El sistema replica completamente la funcionalidad del archivo Excel original, implementando todas las características esenciales del proceso de evaluación
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Formularios Implementados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Autoevaluación Individual</p>
                      <p className="text-sm text-muted-foreground">Cada empleado evalúa su propio desempeño</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Evaluación de Compañeros</p>
                      <p className="text-sm text-muted-foreground">Evaluación de los otros 4 miembros del equipo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Dashboard Consolidado</p>
                      <p className="text-sm text-muted-foreground">Vista de resultados y clasificaciones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    Cálculos Automáticos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Promedios Ponderados</p>
                      <p className="text-sm text-muted-foreground">60% evaluación de compañeros + 40% autoevaluación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Sistema de Clasificación</p>
                      <p className="text-sm text-muted-foreground">Categorización automática según rangos de puntuación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium">Ranking y Ganador</p>
                      <p className="text-sm text-muted-foreground">Selección automática del Empleado del Mes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Evaluation Criteria */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Los 10 Criterios de Evaluación</CardTitle>
                <CardDescription>
                  Cada criterio se evalúa en una escala del 1 al 5, para un máximo de 50 puntos por evaluación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {evaluationCriteria.map((criterion, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {index + 1}
                          </Badge>
                          <span className="font-medium">{criterion.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground ml-12 text-pretty">
                          {criterion.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Score Scale */}
            <Card>
              <CardHeader>
                <CardTitle>Escala de Puntuación</CardTitle>
                <CardDescription>
                  Interpretación de cada nivel de puntuación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {scoreData.map((item) => (
                    <div
                      key={item.score}
                      className="flex items-center gap-4 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors"
                    >
                      <div
                        className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.score}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.meaning}</p>
                        <Progress 
                          value={Number.parseInt(item.score) * 20} 
                          className="h-2 mt-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="acceso" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Acceso al Sistema
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Cómo Entro al Formulario?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Instrucciones paso a paso para que cada empleado acceda a sus formularios
              </p>
            </div>

            <Card className="mb-12 border-2 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  Acceso Abierto - Sin Credenciales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  El sistema ha sido diseñado intencionalmente como una plataforma de <strong>acceso abierto</strong> para maximizar la simplicidad y reducir barreras de entrada.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>No se requieren nombres de usuario ni contraseñas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>No necesitas crear ni memorizar credenciales</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>El proceso comienza inmediatamente</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>Identificación mediante selección de nombre</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step by step access */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">Pasos para Acceder</h3>
              
              {[
                {
                  step: 1,
                  title: 'Abrir el Sitio Web',
                  description: 'Ingresa al enlace del sistema de evaluación que te proporcionó el administrador'
                },
                {
                  step: 2,
                  title: 'Seleccionar Tu Nombre',
                  description: 'Verás un menú desplegable con los 5 nombres de empleados. Selecciona tu nombre de la lista'
                },
                {
                  step: 3,
                  title: 'Elegir Tipo de Evaluación',
                  description: 'Selecciona si quieres completar tu autoevaluación o evaluar a un compañero'
                },
                {
                  step: 4,
                  title: 'Completar el Formulario',
                  description: 'El formulario aparecerá automáticamente con los 10 criterios listos para evaluar'
                }
              ].map((item) => (
                <Card key={item.step} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-pretty">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Employee List */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Los 5 Empleados del Sistema</CardTitle>
                <CardDescription>
                  Cada empleado puede seleccionar su nombre para acceder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Brand Activator 1',
                    'Brand Activator 2',
                    'Organizador de Eventos',
                    'Diseñador',
                    'Empleado 5'
                  ].map((name) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 p-4 bg-muted rounded-lg border-2 border-transparent hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <UserCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials Management */}
      <section id="credenciales" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Gestión de Credenciales
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Cómo Creo las Credenciales?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Explicación completa sobre el sistema de acceso y opciones futuras
              </p>
            </div>

            <Card className="mb-12 bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl">Sistema Actual: Sin Credenciales</CardTitle>
                <CardDescription className="text-base">
                  El sistema actual NO requiere credenciales ni inicio de sesión
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg">
                  Esta decisión de diseño busca maximizar la simplicidad y reducir barreras de entrada. El sistema replica la funcionalidad del archivo Excel original, que tampoco requería autenticación individual.
                </p>

                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-semibold mb-4 text-lg">Ventajas del Acceso Abierto</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Acceso inmediato sin procesos de registro complejos</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Eliminación de problemas con contraseñas olvidadas</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Reducción del tiempo de capacitación necesario</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Mayor enfoque en completar las evaluaciones</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Options */}
            <h3 className="text-2xl font-bold mb-8">Implementación Futura de Protección</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-chart-3" />
                  </div>
                  <CardTitle className="text-lg">Contraseña Única</CardTitle>
                  <CardDescription>Nivel Básico</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Una sola contraseña compartida por todo el equipo
                  </p>
                  <Badge variant="outline" className="bg-chart-3/10">Baja complejidad</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-primary/20">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Contraseñas Individuales</CardTitle>
                  <CardDescription>Nivel Medio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Cada empleado tiene su propia contraseña personal
                  </p>
                  <Badge variant="outline" className="bg-primary/10">Media complejidad</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Autenticación 2FA</CardTitle>
                  <CardDescription>Nivel Alto</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Doble verificación para máxima seguridad
                  </p>
                  <Badge variant="outline" className="bg-accent/10">Alta complejidad</Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Recomendación Importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty">
                  Para implementar cualquier sistema de autenticación, será necesario solicitar una nueva versión del sitio web que incluya esta funcionalidad. El sistema actual no fue diseñado con capacidades de gestión de usuarios, por lo que agregar autenticación requiere modificaciones estructurales significativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section id="personalizacion" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Personalización
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Editar Nombres de Empleados
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Dos opciones para personalizar los nombres en el sistema
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Nombres Actuales del Sistema</CardTitle>
                <CardDescription>
                  Los nombres están integrados en el código del sitio web
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Brand Activator 1',
                    'Brand Activator 2',
                    'Organizador de Eventos',
                    'Diseñador',
                    'Empleado 5'
                  ].map((name) => (
                    <Badge key={name} variant="secondary" className="px-4 py-2 text-sm">
                      {name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary/30 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Recomendado
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">Opción 1: Regeneración del Sitio</CardTitle>
                  <CardDescription>
                    Ideal para usuarios sin conocimientos técnicos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Esta es la forma más segura y sencilla de personalizar los nombres.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <p className="text-sm">Prepare una lista con los nombres reales de los 5 empleados</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <p className="text-sm">Solicite la generación de una nueva versión del sitio web</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <p className="text-sm">Reciba el sitio actualizado listo para usar sin riesgo de errores</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">Ventajas</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>No requiere conocimientos técnicos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Sin riesgo de errores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Garantía de funcionamiento correcto</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="mb-4 w-fit">
                    Para usuarios técnicos
                  </Badge>
                  <CardTitle className="text-2xl">Opción 2: Edición del Código</CardTitle>
                  <CardDescription>
                    Requiere conocimientos de HTML y JavaScript
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    Si tiene acceso a un desarrollador web, puede editar los nombres manualmente.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Edit3 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Localice los archivos JavaScript donde se definen los nombres</p>
                    </div>
                    <div className="flex gap-3">
                      <Edit3 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Modifique las cadenas de texto correspondientes</p>
                    </div>
                    <div className="flex gap-3">
                      <Edit3 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Actualice todas las referencias en formularios y tablas</p>
                    </div>
                    <div className="flex gap-3">
                      <Edit3 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">Pruebe exhaustivamente después de los cambios</p>
                    </div>
                  </div>

                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardContent className="pt-6">
                      <p className="text-sm font-medium mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        Advertencia
                      </p>
                      <p className="text-sm text-muted-foreground">
                        La edición incorrecta del código puede afectar el funcionamiento del sistema de cálculo y generación de reportes. Realice respaldos antes de cualquier modificación.
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section id="guia" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Guía de Uso
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cómo Usar el Sistema
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Instrucciones completas para administradores y empleados
              </p>
            </div>

            {/* For Administrators */}
            <Card className="mb-12">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Settings className="h-6 w-6 text-primary" />
                  Para Administradores
                </CardTitle>
                <CardDescription>
                  Configuración de períodos de evaluación
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Pasos de Configuración</h4>
                      <div className="space-y-3">
                        {[
                          'Compartir el enlace del sitio web con los 5 empleados',
                          'Establecer una fecha límite clara para completar evaluaciones',
                          'Recordar: 1 autoevaluación + 4 evaluaciones de compañeros = 5 formularios',
                          'Monitorear el progreso y enviar recordatorios según sea necesario'
                        ].map((step, index) => (
                          <div key={index} className="flex gap-3 items-start">
                            <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-sm text-muted-foreground">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Cronograma Recomendado</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center p-2 bg-card rounded">
                          <span className="text-muted-foreground">Día 1:</span>
                          <span className="font-medium">Envío de enlaces</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-card rounded">
                          <span className="text-muted-foreground">Días 2-5:</span>
                          <span className="font-medium">Período de evaluación</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-card rounded">
                          <span className="text-muted-foreground">Día 6:</span>
                          <span className="font-medium">Recordatorio</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-card rounded">
                          <span className="text-muted-foreground">Día 7:</span>
                          <span className="font-medium">Cierre y resultados</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <p className="text-sm flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Frecuencia recomendada:</strong> Realizar evaluaciones trimestrales o semestrales para mantener un seguimiento consistente del desempeño sin sobrecargar al equipo.
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* For Employees */}
            <Card className="mb-12">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Users className="h-6 w-6 text-accent" />
                  Para Empleados
                </CardTitle>
                <CardDescription>
                  Completar autoevaluaciones y evaluaciones de compañeros
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="self">
                    <AccordionTrigger className="text-lg font-semibold">
                      Paso 1: Completar Tu Autoevaluación
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <p className="text-muted-foreground">
                        La autoevaluación es tu oportunidad de reflexionar sobre tu propio desempeño. Sé honesto y objetivo.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-3">Acceso</h5>
                          <ol className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-2">
                              <span className="font-mono text-primary">1.</span>
                              <span>Navega al sitio web</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="font-mono text-primary">2.</span>
                              <span>Selecciona tu nombre en el menú de autoevaluación</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="font-mono text-primary">3.</span>
                              <span>Verás un formulario con 10 criterios</span>
                            </li>
                          </ol>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-3">Evaluación</h5>
                          <div className="space-y-2 text-sm">
                            <p className="text-muted-foreground">Evalúa cada criterio en escala 1-5:</p>
                            <div className="space-y-1">
                              <div className="flex justify-between p-2 bg-muted rounded text-xs">
                                <span>5 - Excelente</span>
                                <span className="text-primary">★★★★★</span>
                              </div>
                              <div className="flex justify-between p-2 bg-muted rounded text-xs">
                                <span>4 - Muy Bueno</span>
                                <span className="text-primary">★★★★☆</span>
                              </div>
                              <div className="flex justify-between p-2 bg-muted rounded text-xs">
                                <span>3 - Bueno</span>
                                <span className="text-primary">★★★☆☆</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Card className="bg-muted/50">
                        <CardContent className="pt-6">
                          <p className="text-sm flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>
                              <strong>Tiempo estimado:</strong> 10-15 minutos. Puedes agregar observaciones opcionales en cada criterio para contexto adicional.
                            </span>
                          </p>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="peer">
                    <AccordionTrigger className="text-lg font-semibold">
                      Paso 2: Evaluar a Tus Compañeros
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <p className="text-muted-foreground">
                        Cada empleado debe evaluar a sus 4 compañeros usando los mismos 10 criterios y escala 1-5.
                      </p>
                      
                      <div className="bg-muted p-6 rounded-lg">
                        <h5 className="font-semibold mb-4">Proceso de Evaluación</h5>
                        <div className="space-y-3">
                          {[
                            { step: 'Selecciona', desc: 'Elige el nombre de un compañero del menú' },
                            { step: 'Evalúa', desc: 'Completa los 10 criterios con objetividad' },
                            { step: 'Envía', desc: 'Guarda la evaluación completada' },
                            { step: 'Repite', desc: 'Realiza el proceso para los otros 3 compañeros' }
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="h-8 w-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-medium">{item.step}</p>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Card className="bg-accent/5 border-accent/20">
                        <CardContent className="pt-6">
                          <p className="text-sm">
                            <strong>Consejo:</strong> Sé constructivo y objetivo. Las evaluaciones de compañeros representan el 60% de la calificación final, así que tu retroalimentación es muy valiosa.
                          </p>
                        </CardContent>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="results">
                    <AccordionTrigger className="text-lg font-semibold">
                      Paso 3: Ver Resultados
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <p className="text-muted-foreground">
                        Una vez que todos los empleados hayan completado sus evaluaciones, el sistema calcula automáticamente los resultados.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Fórmula de Cálculo</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20">
                              <p className="text-sm font-mono text-center mb-2">
                                Promedio Final =
                              </p>
                              <p className="text-sm font-mono text-center">
                                (60% × Eval. Compañeros) +
                              </p>
                              <p className="text-sm font-mono text-center">
                                (40% × Autoevaluación)
                              </p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base">Clasificaciones</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between p-2 bg-muted rounded">
                                <span>45-50 puntos</span>
                                <Badge className="bg-primary">Empleado del Mes</Badge>
                              </div>
                              <div className="flex justify-between p-2 bg-muted rounded">
                                <span>40-44 puntos</span>
                                <Badge className="bg-chart-2 text-white">Excelente</Badge>
                              </div>
                              <div className="flex justify-between p-2 bg-muted rounded">
                                <span>35-39 puntos</span>
                                <Badge className="bg-chart-3 text-white">Muy Bueno</Badge>
                              </div>
                              <div className="flex justify-between p-2 bg-muted rounded">
                                <span>&lt; 35 puntos</span>
                                <Badge variant="outline">En Mejora</Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Visualization of calculation */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Ponderación de Evaluaciones</CardTitle>
                  <CardDescription>
                    Distribución del peso en el cálculo final
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={weightingData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {weightingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#ffffff', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          color: '#18181b'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ejemplo de Resultados</CardTitle>
                  <CardDescription>
                    Distribución por clasificación
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={classificationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip 
                        cursor={{ fill: '#f3f4f6' }}
                        contentStyle={{ 
                          backgroundColor: '#ffffff', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                        {classificationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Sample Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Dashboard RESUMEN_Y_GANADOR</CardTitle>
                <CardDescription>
                  Vista consolidada de todos los resultados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full text-sm min-w-[600px]">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="text-left p-3 font-semibold whitespace-nowrap">Empleado</th>
                        <th className="text-center p-3 font-semibold whitespace-nowrap">Autoevaluación</th>
                        <th className="text-center p-3 font-semibold whitespace-nowrap">Eval. Compañeros</th>
                        <th className="text-center p-3 font-semibold whitespace-nowrap">Promedio Final</th>
                        <th className="text-center p-3 font-semibold whitespace-nowrap">Clasificación</th>
                        <th className="text-center p-3 font-semibold whitespace-nowrap">Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((emp, index) => (
                        <tr 
                          key={index}
                          className={`border-b border-border hover:bg-muted/50 transition-colors ${
                            emp.rank === 1 ? 'bg-primary/5' : ''
                          }`}
                        >
                          <td className="p-3 font-medium">
                            {emp.name}
                            {emp.rank === 1 && (
                              <Award className="inline-block ml-2 h-4 w-4 text-primary" />
                            )}
                          </td>
                          <td className="text-center p-3">{emp.selfEval}</td>
                          <td className="text-center p-3">{emp.peerEval}</td>
                          <td className="text-center p-3 font-bold">{emp.final}</td>
                          <td className="text-center p-3">
                            <Badge
                              className={
                                emp.final >= 45
                                  ? 'bg-primary text-primary-foreground'
                                  : emp.final >= 40
                                    ? 'bg-chart-2 text-white'
                                    : emp.final >= 35
                                      ? 'bg-chart-3 text-white'
                                      : 'bg-muted text-foreground'
                              }
                            >
                              {emp.final >= 45
                                ? 'Empleado del Mes'
                                : emp.final >= 40
                                  ? 'Excelente'
                                  : emp.final >= 35
                                    ? 'Muy Bueno'
                                    : 'En Mejora'}
                            </Badge>
                          </td>
                          <td className="text-center p-3">
                            <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold">
                              {emp.rank}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section id="problemas" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Solución de Problemas
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Respuestas a los problemas más comunes
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold">Problemas Comunes</h3>
              
              {[
                {
                  title: 'Errores de Validación del Formulario',
                  problem: 'Aparece un mensaje indicando que faltan campos por completar.',
                  solution: 'Revise que haya asignado una puntuación (1-5) a cada uno de los 10 criterios de evaluación. Los campos de observaciones son opcionales y pueden dejarse vacíos.',
                  icon: AlertCircle
                },
                {
                  title: 'Envíos Incompletos',
                  problem: 'El sistema indica que la evaluación no se guardó correctamente.',
                  solution: 'Verifique su conexión a internet antes de hacer clic en "Enviar". Si el problema persiste, use el botón "Guardar borrador" para no perder su progreso y contacte al administrador.',
                  icon: AlertCircle
                },
                {
                  title: 'Compatibilidad del Navegador',
                  problem: 'El formulario no se visualiza correctamente.',
                  solution: 'Utilice navegadores modernos como Chrome, Firefox, Safari o Edge (versiones actualizadas). Evite navegadores obsoletos como Internet Explorer.',
                  icon: AlertCircle
                },
                {
                  title: 'Los Datos No Se Guardan',
                  problem: 'Al regresar al formulario, los datos ingresados no aparecen.',
                  solution: 'Asegúrese de hacer clic en "Guardar borrador" antes de cerrar o navegar fuera de la página. Los datos solo se guardan cuando presiona este botón o "Enviar".',
                  icon: AlertCircle
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Problema:</p>
                      <p className="text-sm">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Solución:</p>
                      <p className="text-sm">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-12 bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  Consejo Importante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty">
                  Siempre revise que todos los empleados hayan completado sus autoevaluaciones y evaluaciones de compañeros antes de consultar los resultados finales. Los cálculos solo son precisos cuando todos los datos están disponibles.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq1">
                <AccordionTrigger className="text-left">
                  ¿Cuánto tiempo debo dedicar a cada evaluación?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Recomendamos 10-15 minutos para la autoevaluación y 5-10 minutos por cada evaluación de compañero. Sea reflexivo y honesto en sus respuestas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq2">
                <AccordionTrigger className="text-left">
                  ¿Con qué frecuencia se deben realizar las evaluaciones?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Se recomienda realizar evaluaciones trimestrales o semestrales para mantener un seguimiento consistente del desempeño sin sobrecargar al equipo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq3">
                <AccordionTrigger className="text-left">
                  ¿Mis respuestas son confidenciales?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Las evaluaciones de compañeros se promedian de forma anónima. Solo los resultados consolidados son visibles en el panel de resumen. Los administradores pueden ver las evaluaciones individuales si es necesario para proporcionar retroalimentación específica.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq4">
                <AccordionTrigger className="text-left">
                  ¿Qué hago si un compañero no completa su evaluación?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Contacte al administrador del sistema, quien puede enviar recordatorios. El sistema calculará promedios con las evaluaciones disponibles, pero se recomienda tener todas las evaluaciones completas para mayor precisión.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq5">
                <AccordionTrigger className="text-left">
                  ¿Qué significan las clasificaciones finales?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="text-muted-foreground mb-3">Las clasificaciones se basan en el promedio final:</p>
                    <div className="grid gap-2">
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">45-50 puntos</span>
                        <Badge className="bg-primary">Empleado del Mes</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">40-44 puntos</span>
                        <Badge className="bg-chart-2 text-white">Excelente</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">35-39 puntos</span>
                        <Badge className="bg-chart-3 text-white">Muy Bueno</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="font-medium">Menos de 35 puntos</span>
                        <Badge variant="outline">En Mejora</Badge>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq6">
                <AccordionTrigger className="text-left">
                  ¿Cómo interpretar la escala de puntuación?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {[
                      { score: 1, label: 'Deficiente', desc: 'Necesita mejora urgente' },
                      { score: 2, label: 'Regular', desc: 'Requiere atención' },
                      { score: 3, label: 'Bueno', desc: 'Desempeño esperado' },
                      { score: 4, label: 'Muy Bueno', desc: 'Supera expectativas' },
                      { score: 5, label: 'Excelente', desc: 'Desempeño sobresaliente' }
                    ].map((item) => (
                      <div key={item.score} className="flex items-center gap-3 p-2 bg-muted rounded">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          {item.score}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              Generated by Superagent
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
