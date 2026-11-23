import { useEffect, useMemo, useState } from "react";
import { categories, questions } from "./data/questions.js";

const PROGRESS_KEY = "dsa-quest-progress";
const BEST_KEY = "dsa-quest-best-score";

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function Header({ onHome, screen }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={onHome} aria-label="Voltar ao início">
        <span className="brand-mark">D</span>
        <span>DSA<span className="brand-accent">QUEST</span></span>
      </button>
      <div className="topbar-right">
        <span className="status-dot" />
        <span>Revisão de JavaScript</span>
        {screen !== "home" && (
          <button className="text-button" onClick={onHome}>Início</button>
        )}
      </div>
    </header>
  );
}

function HomeScreen({ bestScore, savedProgress, onStart, onContinue }) {
  const totalQuestions = questions.length;

  return (
    <main className="home page-width">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> DSA • 2026</div>
          <h1>Seu próximo nível<br />começa com <span>uma questão.</span></h1>
          <p className="hero-description">
            Um desafio rápido para revisar JavaScript, testar seus conhecimentos
            e descobrir o que você já domina.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onStart}>
              Começar revisão <span aria-hidden="true">↗</span>
            </button>
            {savedProgress && (
              <button className="button button-secondary" onClick={onContinue}>
                Continuar de onde parei
              </button>
            )}
          </div>
          <div className="hero-note"><span>✓</span> Seu progresso fica salvo neste navegador</div>
        </div>

        <div className="hero-visual" aria-label="Resumo do desafio">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-card-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>javascript.js</span>
              <span className="code-lang">JS</span>
            </div>
            <div className="code-lines">
              <div><span className="line-no">01</span><span className="syntax-purple">const</span> <span className="syntax-blue">conhecimento</span> = <span className="syntax-green">100</span>;</div>
              <div><span className="line-no">02</span><span className="syntax-purple">let</span> <span className="syntax-blue">nivel</span> = <span className="syntax-yellow">"dev"</span>;</div>
              <div className="code-spacer"><span className="line-no">03</span></div>
              <div><span className="line-no">04</span><span className="syntax-purple">if</span> (praticar) {"{"}</div>
              <div><span className="line-no">05</span>&nbsp;&nbsp; <span className="syntax-blue">nivel</span> = <span className="syntax-yellow">"pro"</span>;</div>
              <div><span className="line-no">06</span>{"}"}</div>
              <div className="code-spacer"><span className="line-no">07</span></div>
              <div><span className="line-no">08</span><span className="syntax-comment">// bora codar!</span></div>
            </div>
            <div className="code-card-footer">
              <span><span className="footer-pulse" /> ambiente de aprendizado</span>
              <span>UTF-8</span>
            </div>
          </div>
          <div className="floating-chip chip-top"><span>✳</span> aprender fazendo</div>
          <div className="floating-chip chip-bottom"><span>↗</span> modo prática ativado</div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Informações do quiz">
        <article className="stat-card">
          <span className="stat-icon">⌘</span>
          <div><strong>{totalQuestions}</strong><span>Questões disponíveis</span></div>
        </article>
        <article className="stat-card">
          <span className="stat-icon stat-icon-purple">▦</span>
          <div><strong>{categories.length - 1}</strong><span>Temas de JavaScript</span></div>
        </article>
        <article className="stat-card">
          <span className="stat-icon stat-icon-orange">↗</span>
          <div><strong>{bestScore === null ? "—" : bestScore + "%"}</strong><span>Seu melhor resultado</span></div>
        </article>
      </section>

      <section className="topics-section">
        <div className="section-heading">
          <div><span className="section-kicker">O QUE VOCÊ VAI REVISAR</span><h2>Do básico ao React.</h2></div>
          <span className="topic-count">09 áreas de conhecimento</span>
        </div>
        <div className="topic-list">
          {categories.slice(1).map((category, index) => (
            <div className="topic-pill" key={category}>
              <span className="topic-number">{String(index + 1).padStart(2, "0")}</span>{category}
            </div>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="how-heading"><span className="section-kicker">COMO FUNCIONA</span><h2>Simples assim.</h2></div>
        <div className="steps-grid">
          <div className="step-card"><span className="step-number">01</span><h3>Responda</h3><p>Leia cada questão e escolha a alternativa que considera correta.</p></div>
          <div className="step-card"><span className="step-number">02</span><h3>Aprenda</h3><p>Veja a explicação e entenda o motivo de cada resposta.</p></div>
          <div className="step-card"><span className="step-number">03</span><h3>Acompanhe</h3><p>Confira sua pontuação e revise os assuntos para evoluir.</p></div>
        </div>
      </section>

      <footer className="footer"><span>DSA QUEST <span className="footer-separator">/</span> 2026</span><span>Feito para aprender, testar e evoluir.</span></footer>
    </main>
  );
}

function QuizScreen({ session, onAnswer, onNext, onPrevious, onExit }) {
  const currentQuestion = questions.find((question) => question.id === session.questionIds[session.currentIndex]);
  const selectedAnswer = session.answers[currentQuestion.id];
  const answeredCount = Object.keys(session.answers).length;
  const progress = ((session.currentIndex + 1) / session.questionIds.length) * 100;

  return (
    <main className="quiz-page page-width">
      <div className="quiz-topline">
        <button className="back-button" onClick={onExit}>← <span>Sair da revisão</span></button>
        <span className="quiz-counter">QUESTÃO <strong>{String(session.currentIndex + 1).padStart(2, "0")}</strong> <span>/ {String(session.questionIds.length).padStart(2, "0")}</span></span>
      </div>

      <div className="progress-track"><div className="progress-fill" style={{ width: progress + "%" }} /></div>

      <div className="quiz-layout">
        <section className="question-panel">
          <div className="question-meta">
            <span className="category-tag">{currentQuestion.category}</span>
            <span className="difficulty-tag">{currentQuestion.level}</span>
          </div>
          <div className="question-heading">
            <span className="question-overline">TESTE SEU CONHECIMENTO</span>
            <h1>{currentQuestion.question}</h1>
          </div>

          {currentQuestion.code && (
            <pre className="question-code"><span className="code-label">JAVASCRIPT</span><code>{currentQuestion.code}</code></pre>
          )}

          <div className="answers-list">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              return (
                <button
                  key={option}
                  className={"answer-option" + (isSelected ? " selected" : "")}
                  onClick={() => onAnswer(currentQuestion.id, index)}
                  aria-pressed={isSelected}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{option}</span>
                  <span className="option-check">{isSelected ? "✓" : ""}</span>
                </button>
              );
            })}
          </div>

          <div className="question-actions">
            <button className="button button-quiet" onClick={onPrevious} disabled={session.currentIndex === 0}>← Anterior</button>
            <button className="button button-primary" onClick={onNext} disabled={selectedAnswer === undefined}>
              {session.currentIndex === session.questionIds.length - 1 ? "Ver resultado" : "Próxima questão"} <span>→</span>
            </button>
          </div>
        </section>

        <aside className="quiz-sidebar">
          <div className="sidebar-card">
            <span className="section-kicker">SUA REVISÃO</span>
            <div className="sidebar-progress">
              <div className="mini-progress-ring" style={{ background: "conic-gradient(var(--green) " + (answeredCount / session.questionIds.length * 360) + "deg, rgba(156,230,191,.12) 0deg)" }}><span>{answeredCount}<small>/{session.questionIds.length}</small></span></div>
              <div><strong>{answeredCount} respondidas</strong><p>Continue no seu ritmo.</p></div>
            </div>
            <div className="sidebar-divider" />
            <div className="sidebar-tip"><span className="tip-icon">✦</span><div><strong>Dica de estudo</strong><p>Leia a explicação de cada questão. Entender o motivo é mais importante do que decorar a alternativa.</p></div></div>
          </div>
          <div className="save-note"><span>⌁</span> Progresso salvo automaticamente</div>
        </aside>
      </div>
    </main>
  );
}

function ResultScreen({ result, bestScore, onRestart, onHome }) {
  const percentage = Math.round((result.score / result.total) * 100);
  const message = percentage >= 80
    ? ["Mandou bem!", "Você demonstrou um ótimo domínio dos assuntos."]
    : percentage >= 50
      ? ["Bom trabalho!", "Você já tem uma boa base. Revise os pontos que errou."]
      : ["Toda prática conta.", "Use as explicações para reforçar os fundamentos e tente novamente."];

  return (
    <main className="result-page page-width">
      <div className="result-banner">
        <span className="section-kicker">REVISÃO CONCLUÍDA</span>
        <div className="result-score-layout">
          <div className="score-circle" style={{ background: "conic-gradient(var(--green) " + (percentage * 3.6) + "deg, #2b3a4b 0deg)" }}><div><strong>{percentage}<small>%</small></strong><span>DE ACERTOS</span></div></div>
          <div className="result-message"><h1>{message[0]}</h1><p>{message[1]}</p><span className="score-detail">{result.score} de {result.total} respostas corretas</span></div>
        </div>
        <div className="result-metrics">
          <div><span>ACERTOS</span><strong>{result.score}</strong></div>
          <div><span>ERROS</span><strong>{result.total - result.score}</strong></div>
          <div><span>SEU RECORDE</span><strong>{bestScore === null ? percentage : bestScore}%</strong></div>
        </div>
      </div>

      <section className="review-section">
        <div className="section-heading"><div><span className="section-kicker">APRENDA COM O RESULTADO</span><h2>Revisão das respostas</h2></div><span className="topic-count">{result.details.length} questões</span></div>
        <div className="review-list">
          {result.details.map((item, index) => (
            <article className={"review-item " + (item.correct ? "review-correct" : "review-wrong")} key={item.question.id}>
              <div className="review-item-top">
                <span className="review-index">Q{String(index + 1).padStart(2, "0")}</span>
                <span className="review-category">{item.question.category}</span>
                <span className={"review-status " + (item.correct ? "status-correct" : "status-wrong")}>{item.correct ? "✓ Correta" : "✕ Incorreta"}</span>
              </div>
              <h3>{item.question.question}</h3>
              <p className="review-answer"><strong>Sua resposta:</strong> {item.selected === undefined ? "Não respondida" : item.question.options[item.selected]}</p>
              {!item.correct && <p className="review-answer correct-answer"><strong>Resposta certa:</strong> {item.question.options[item.question.answer]}</p>}
              <p className="review-explanation">{item.question.explanation}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="result-actions">
        <button className="button button-secondary" onClick={onHome}>Voltar ao início</button>
        <button className="button button-primary" onClick={onRestart}>Refazer revisão ↗</button>
      </div>
      <footer className="footer"><span>DSA QUEST <span className="footer-separator">/</span> 2026</span><span>Continue praticando.</span></footer>
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [bestScore, setBestScore] = useState(() => readStorage(BEST_KEY, null));
  const [savedProgress, setSavedProgress] = useState(() => readStorage(PROGRESS_KEY, null));
  const [session, setSession] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (session) {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(session));
      setSavedProgress(session);
    }
  }, [session]);

  useEffect(() => {
    if (bestScore !== null) {
      localStorage.setItem(BEST_KEY, JSON.stringify(bestScore));
    }
  }, [bestScore]);

  const selectedQuestions = useMemo(() => {
    if (!session) return [];
    return session.questionIds.map((id) => questions.find((question) => question.id === id)).filter(Boolean);
  }, [session]);

  function startQuiz() {
    const newSession = {
      questionIds: questions.map((question) => question.id),
      currentIndex: 0,
      answers: {}
    };
    localStorage.removeItem(PROGRESS_KEY);
    setSavedProgress(null);
    setSession(newSession);
    setResult(null);
    setScreen("quiz");
  }

  function continueQuiz() {
    if (!savedProgress) return;
    setSession(savedProgress);
    setScreen("quiz");
  }

  function chooseAnswer(questionId, answerIndex) {
    setSession((current) => ({
      ...current,
      answers: { ...current.answers, [questionId]: answerIndex }
    }));
  }

  function goNext() {
    if (!session) return;
    const currentQuestion = selectedQuestions[session.currentIndex];
    if (session.answers[currentQuestion.id] === undefined) return;

    if (session.currentIndex < session.questionIds.length - 1) {
      setSession((current) => ({ ...current, currentIndex: current.currentIndex + 1 }));
      return;
    }

    const details = selectedQuestions.map((question) => ({
      question,
      selected: session.answers[question.id],
      correct: session.answers[question.id] === question.answer
    }));
    const score = details.filter((item) => item.correct).length;
    const percentage = Math.round((score / details.length) * 100);

    setResult({ score, total: details.length, details });
    setBestScore((previous) => previous === null ? percentage : Math.max(previous, percentage));
    localStorage.removeItem(PROGRESS_KEY);
    setSavedProgress(null);
    setSession(null);
    setScreen("result");
  }

  function goPrevious() {
    if (!session || session.currentIndex === 0) return;
    setSession((current) => ({ ...current, currentIndex: current.currentIndex - 1 }));
  }

  function goHome() {
    setSession(null);
    setScreen("home");
  }

  return (
    <div className="app-shell">
      <Header onHome={goHome} screen={screen} />
      {screen === "home" && (
        <HomeScreen bestScore={bestScore} savedProgress={savedProgress} onStart={startQuiz} onContinue={continueQuiz} />
      )}
      {screen === "quiz" && session && (
        <QuizScreen
          session={session}
          onAnswer={chooseAnswer}
          onNext={goNext}
          onPrevious={goPrevious}
          onExit={goHome}
        />
      )}
      {screen === "result" && result && (
        <ResultScreen result={result} bestScore={bestScore} onRestart={startQuiz} onHome={goHome} />
      )}
    </div>
  );
}
