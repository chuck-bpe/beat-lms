-- Quiz responses table for storing learner quiz attempts and scores
-- Score and total are computed server-side; answers stores per-question selections

CREATE TABLE quiz_responses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  week_number integer NOT NULL,
  score integer NOT NULL,
  total integer NOT NULL,
  answers jsonb NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id, week_number)
);

ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own quiz responses"
  ON quiz_responses FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own quiz responses"
  ON quiz_responses FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own quiz responses"
  ON quiz_responses FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all quiz responses"
  ON quiz_responses FOR SELECT
  USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'));
